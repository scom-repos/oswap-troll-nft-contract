// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.4;

import "./Authorization.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract TrollNFTV2 is Authorization, ReentrancyGuard, ERC721Enumerable {
    using SafeERC20 for IERC20;

    event Stake(address indexed who, uint256 indexed tokenId, uint256 amount);
    event AddStakes(uint256 indexed tokenId, uint256 amountAdded, uint256 newAmount);
    event Unstake(address indexed who, uint256 indexed tokenId, uint256 amount);
    event Attribute(uint256 indexed tokenId, uint256 attribute);
    event BaseURI(string baseURI);
    event Cap(uint256 cap);
    event MinimumStake(uint256 minimumStake);
    event ProtocolFee(uint256 protocolFee, address protocolFeeTo);
    event ApprovedStaker(address indexed staker, bool allow);
    event CustomAttribute(uint256 indexed tokenId, uint256 attribute);
    event StakesApproval(uint256 indexed fromTokenId, address indexed spender, uint256 amount);
    event StakesTransfer(uint256 indexed fromTokenId, uint256 indexed toTokenId, uint256 amount);
    event AddValidNFT(IERC721 indexed nft);
    event EquipNFT(uint256 indexed trollId, IERC721 indexed nft, uint256 nftId);
    event UnequipNFT(uint256 indexed trollId, IERC721 indexed nft, uint256 nftId);

    uint256 public cap;
    string public baseURI;
    IERC20 public immutable stakeToken;
    bool public requireApproval;
    uint256 public minimumStake;
    uint256 public protocolFee;
    address public protocolFeeTo;
    uint256 public protocolFeeBalance; 
    IERC721[] public listValidNFTs;
    uint256 public maximumValidNFTs;

    uint256 public counter;
    mapping(uint256 => uint256) public stakingBalance; // stakingBalance[tokenId] = stakeBalance
    mapping(uint256 => uint256) public _attributes;
    mapping(uint256 => uint256) public _customAttributes;
    mapping(uint256 => uint256) public creationDate;
    mapping(uint256 => uint256) public destoryDate;
    mapping(uint256 => uint256) public lastStakeDate;
    mapping(address => bool) public approvedStaker;
    mapping(address => bool) public minted;
    mapping(IERC721 => bool) public isValidNFT; 
    mapping(uint256 => mapping(IERC721 => uint256)) public trollOwnedNFTs; //Troll tokenId -> NFT address -> NFT tokenId
    mapping(IERC721 => mapping(uint256 => uint256)) public nftsEquipped; //NFT address -> NFT tokenId -> Troll tokenId

    mapping(uint256 => uint256) public extraStakes;
    mapping(uint256 => mapping(address => uint256)) public _stakesTransferAllowances; // allowance to transfer extra stakes

    struct NFTInfo {
        IERC721[] listValidNFTs;
        uint256 maximumValidNFTs;
    }

    constructor(
        string memory _name, 
        string memory _symbol, 
        string memory __baseURI,
        uint256 _cap, 
        IERC20 _stakeToken, 
        bool _requireApproval, 
        uint256 _minimumStake, 
        uint256 _protocolFee, 
        address _protocolFeeTo,
        NFTInfo memory _nftInfo
    ) ERC721(_name, _symbol) {
        require(_protocolFee == 0 || _protocolFeeTo != address(0), "Invalid protocolFee/FeeTo");
        require(_nftInfo.listValidNFTs.length <= _nftInfo.maximumValidNFTs, 'Exceeds maximum number of valid NFTs');   
        baseURI = __baseURI;
        cap = _cap;
        stakeToken = _stakeToken;
        requireApproval = _requireApproval;
        minimumStake = _minimumStake;
        protocolFee = _protocolFee;
        protocolFeeTo = _protocolFeeTo;
        maximumValidNFTs = _nftInfo.maximumValidNFTs;
        addValidNFTs(_nftInfo.listValidNFTs);
        emit BaseURI(baseURI);
        emit Cap(cap);
        emit MinimumStake(minimumStake);
        emit ProtocolFee(protocolFee, protocolFeeTo);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function setBaseURI(string memory __baseURI) external onlyOwner {
        baseURI = __baseURI;
        emit BaseURI(baseURI);
    }
    function setCap(uint256 _cap) external onlyOwner {
        require(_cap > cap, "Cap already exceeded");
        cap = _cap;
        emit Cap(cap);
    }
    function setMinimumStake(uint256 _minimumStake) external onlyOwner {
        minimumStake = _minimumStake;
        emit MinimumStake(minimumStake);
    }
    function setProtocolFee(uint256 _protocolFee, address _protocolFeeTo) external onlyOwner {
        require(_protocolFee == 0 || _protocolFeeTo != address(0), "Invalid protocolFee/FeeTo");
        protocolFee = _protocolFee;
        protocolFeeTo = _protocolFeeTo;
        emit ProtocolFee(protocolFee, protocolFeeTo);
    }
    function setApprovedStaker(address staker, bool allow) external onlyOwner {
        if (!requireApproval)
            requireApproval = true;
        if (allow)
            approvedStaker[staker] = true;
        else
            delete approvedStaker[staker];
        emit ApprovedStaker(staker, allow);
    }
    function batchApprove(address[] calldata stakers) external onlyOwner {
        requireApproval = true;
        uint256 length = stakers.length;
        for (uint256 i = 0 ; i < length ; i++) {
            approvedStaker[stakers[i]] = true;
            emit ApprovedStaker(stakers[i], true);
        }
    }

	function pow(uint256 x, uint256 n) internal pure returns (uint256 z) {
		assembly {
			switch x 
				case 0 {
					switch n 
						case 0 {z := 1} 
						default {z := 0}
				}
				default {
					switch mod(n, 2) 
						case 0 { z := 1 } 
						default { z := x }
					for { n := div(n, 2) } n { n := div(n, 2) } {
						let xx := mul(x, x)
						if iszero(eq(div(xx, x), x)) { revert(0,0) }
                        x := xx
						if mod(n, 2) {
							let zx := mul(z, x)
							if and(iszero(iszero(x)), iszero(eq(div(zx, x), z))) { revert(0,0) }
                            z := zx
						}
					}
				}
		}
	}
    function getAttributes1(uint256 tokenId, uint256 base/*radix*/, uint256 offset, uint256 digits) external view returns (uint256) {
        return ( _attributes[tokenId] / pow(base, offset) ) % pow(base, digits);
    }
    function getAttributes2(uint256 tokenId, uint256 base/*radix*/, uint256[] calldata digits) external view returns (uint256[] memory params) {
        uint256 length = digits.length;
        params = new uint256[](length);
        uint256 offset = 0;
        uint256 p = _attributes[tokenId];
        for (uint256 i = 0 ; i < length ; i++) {
            params[i] = ( p / pow(base, offset) ) % pow(base, digits[i]);
            offset += digits[i];
        }
    }

    function stake(uint256 amount) external virtual returns (uint256 tokenId) {
        tokenId = _stake(amount);
        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        uint256 attribute = uint256(keccak256(abi.encodePacked(chainId, block.number, address(this), msg.sender)));
        _attributes[tokenId] = attribute;
        emit Attribute(tokenId, attribute);
    }
    function _stake(uint256 amount) internal nonReentrant returns (uint256 tokenId) {
        require(!requireApproval || approvedStaker[msg.sender], "Not authorized");
        uint256 stakedAmount = amount - protocolFee;
        require(stakedAmount >= minimumStake, "Mininum stake not met");
        require(totalSupply() < cap, "Cap exceeded");
        require(!requireApproval || !minted[msg.sender], "You can only stake once");
        tokenId = ++counter;
        stakeToken.safeTransferFrom(msg.sender, address(this), amount);
        stakingBalance[tokenId] = stakedAmount;
        protocolFeeBalance += protocolFee;
        minted[msg.sender] = true;
        creationDate[tokenId] = block.timestamp;
        lastStakeDate[tokenId] = block.timestamp;
        _safeMint(msg.sender, tokenId);
        emit Stake(msg.sender, tokenId, amount);
    }
    function addStakes(uint256 tokenId, uint256 amount) external {
        require(ownerOf(tokenId) == msg.sender, "Not authorized");
        stakeToken.safeTransferFrom(msg.sender, address(this), amount);
        stakingBalance[tokenId] += amount;
        lastStakeDate[tokenId] = block.timestamp;
        emit AddStakes(tokenId, amount, stakingBalance[tokenId]);
    }
    function unstake(uint256 tokenId) external nonReentrant {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Not authorized");
        _burn(tokenId);
        destoryDate[tokenId] = block.timestamp;
        uint256 amount = stakingBalance[tokenId];
        delete stakingBalance[tokenId];
        stakeToken.safeTransfer(msg.sender, amount);
        for (uint256 i = 0; i < listValidNFTs.length; i++) {
            IERC721 nft = listValidNFTs[i];
            uint256 nftTokenId = trollOwnedNFTs[tokenId][nft];
            if (nftTokenId != 0) {
                delete nftsEquipped[nft][nftTokenId]; 
                delete trollOwnedNFTs[tokenId][nft];      
            }  
        }
        emit Unstake(msg.sender, tokenId, amount);
    }

/*
    function _transferStakes(
        uint256 fromToken,
        uint256 toToken,
        uint256 amount
    ) internal {
        uint256 senderBalance = extraStakes[fromToken];
        require(senderBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            extraStakes[fromToken] = senderBalance - amount;
        }
        extraStakes[toToken] += amount;

        emit StakesTransfer(fromToken, toToken, amount);
    }
    function _approveStakesTransfer(
        uint256 tokenId,
        address spender,
        uint256 amount
    ) internal {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _stakesTransferAllowances[tokenId][spender] = amount;
        emit StakesApproval(tokenId, spender, amount);
    }
    function transferStakesFrom(
        uint256 fromToken,
        uint256 toToken,
        uint256 amount
    ) public returns (bool) {
        _transferStakes(fromToken, toToken, amount);

        uint256 currentAllowance = _stakesTransferAllowances[fromToken][_msgSender()];
        require(currentAllowance >= amount, "ERC20: transfer amount exceeds allowance");
        unchecked {
            _approveStakesTransfer(fromToken, _msgSender(), currentAllowance - amount);
        }

        return true;
    }
    function approveStakesTransfer(uint256 tokenId, address spender, uint256 amount) public returns (bool) {
        require(ownerOf(tokenId) == msg.sender, "Not authorized");
        _approveStakesTransfer(tokenId, spender, amount);
        return true;
    }
    function increaseStakesAllowance(uint256 tokenId, address spender, uint256 addedValue) public returns (bool) {
        require(ownerOf(tokenId) == msg.sender, "Not authorized");
        _approveStakesTransfer(tokenId, spender, _stakesTransferAllowances[tokenId][spender] + addedValue);
        return true;
    }
    function decreaseStakesAllowance(uint256 tokenId, address spender, uint256 subtractedValue) public returns (bool) {
        require(ownerOf(tokenId) == msg.sender, "Not authorized");
        uint256 currentAllowance = _stakesTransferAllowances[tokenId][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approveStakesTransfer(tokenId, spender, currentAllowance - subtractedValue);
        }

        return true;
    }
*/

    function setCustomAttribute(uint256 tokenId, uint256 attribute) external auth {
        require(_customAttributes[tokenId] == 0, "Attribute already set");
        _customAttributes[tokenId] = attribute;
        emit CustomAttribute(tokenId, attribute);
    }

    function addValidNFTs(IERC721[] memory nfts) public onlyOwner {    
        require(listValidNFTs.length + nfts.length <= maximumValidNFTs, 'Exceeds maximum number of valid NFTs');   
        for (uint256 i = 0; i < nfts.length; i++) {
            IERC721 nft = nfts[i];
            require(!isValidNFT[nft], "NFT already added");
            isValidNFT[nft] = true;
            listValidNFTs.push(nft);
            emit AddValidNFT(nft);
        }
    }

    function validNFTsLength() external view returns (uint) {
        return listValidNFTs.length;
    }

    function transferProtocolFee() external nonReentrant {
        if (protocolFeeTo != address(0) && protocolFeeBalance > 0) {
            uint256 _protocolFeeBalance = protocolFeeBalance;
            protocolFeeBalance = 0;
            stakeToken.safeTransfer(protocolFeeTo, _protocolFeeBalance);
        }
    }

    function equipNFT(uint256 trollId, IERC721 nft, uint256 nftId) external {
        require(isValidNFT[nft], "Not valid NFT");
        require(ownerOf(trollId) == msg.sender, "You are not the owner of this troll");
        require(nft.ownerOf(nftId) == msg.sender, "You are not the owner of this NFT");
        require(nftsEquipped[nft][nftId] == 0, "NFT already equipped");
        require(trollOwnedNFTs[trollId][nft] == 0, "Each troll can only equip one token per NFT");
        nftsEquipped[nft][nftId] = trollId;
        trollOwnedNFTs[trollId][nft] = nftId;
        emit EquipNFT(trollId, nft, nftId);
    }

    function unequipNFT(uint256 trollId, IERC721 nft, uint256 nftId) external {
        require(isValidNFT[nft], "Not valid NFT");
        require(ownerOf(trollId) == msg.sender, "You are not the owner of this troll");
        require(nft.ownerOf(nftId) == msg.sender, "You are not the owner of this NFT");
        require(nftsEquipped[nft][nftId] == trollId, "This NFT does not belong to this troll");
        require(trollOwnedNFTs[trollId][nft] == nftId, "This troll does not own this NFT");
        delete nftsEquipped[nft][nftId];
        delete trollOwnedNFTs[trollId][nft];
        emit UnequipNFT(trollId, nft, nftId);
    }   
}
