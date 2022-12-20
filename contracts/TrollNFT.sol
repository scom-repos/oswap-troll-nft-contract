// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.4;

import "./Authorization.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract TrollNFT is Authorization, ReentrancyGuard, ERC721Enumerable {
    using SafeERC20 for IERC20;

    event Stake(address indexed who, uint256 indexed tokenId, uint256 amount);
    event Unstake(address indexed who, uint256 indexed tokenId, uint256 amount);
    event Attribute(uint256 indexed tokenId, uint256 attribute);
    event BaseURI(string baseURI);
    event Cap(uint256 cap);
    event MinimumStake(uint256 minimumStake);
    event ProtocolFee(uint256 protocolFee, address protocolFeeTo);
    event ApprovedStaker(address indexed staker, bool allow);
    event CustomAttribute(uint256 indexed tokenId, uint256 attribute);

    uint256 public cap;
    string public baseURI;
    IERC20 public immutable stakeToken;
    bool public requireApproval;
    uint256 public minimumStake;
    uint256 public protocolFee;
    address public protocolFeeTo;
    uint256 public protocolFeeBalance;

    uint256 public counter;
    mapping(uint256 => uint256) public stakingBalance; // stakingBalance[tokenId] = stakeBalance
    mapping(uint256 => uint256) public _attributes;
    mapping(uint256 => uint256) public _customAttributes;
    mapping(uint256 => uint256) public creationTime;
    mapping(address => bool) public approvedStaker;
    mapping(address => bool) public minted;

    constructor(
        string memory _name, 
        string memory _symbol, 
        string memory __baseURI,
        uint256 _cap, 
        IERC20 _stakeToken, 
        bool _requireApproval, 
        uint256 _minimumStake, 
        uint256 _protocolFee, 
        address _protocolFeeTo
    ) ERC721(_name, _symbol) {
        require(_minimumStake > _protocolFee, "Invalid minStake/protocolFee");
        require(_protocolFee == 0 || _protocolFeeTo != address(0), "Invalid protocolFee/FeeTo");
        baseURI = __baseURI;
        cap = _cap;
        stakeToken = _stakeToken;
        requireApproval = _requireApproval;
        minimumStake = _minimumStake;
        protocolFee = _protocolFee;
        protocolFeeTo = _protocolFeeTo;
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
        require(_minimumStake > protocolFee, "Invalid minStake/protocolFee");
        minimumStake = _minimumStake;
        emit MinimumStake(minimumStake);
    }
    function setProtocolFee(uint256 _protocolFee, address _protocolFeeTo) external onlyOwner {
        require(minimumStake > _protocolFee, "Invalid minStake/protocolFee");
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
        address to = msg.sender;
        require(!requireApproval || approvedStaker[msg.sender], "Not authorized");
        require((amount > protocolFee) && ((amount - protocolFee) >= minimumStake), "Mininum stake not met");
        require(totalSupply() < cap, "Cap exceeded");
        require(!requireApproval || !minted[msg.sender], "You can only stake once");
        tokenId = ++counter;
        stakeToken.safeTransferFrom(to, address(this), amount);
        stakingBalance[tokenId] = amount - protocolFee;
        protocolFeeBalance += protocolFee;
        minted[msg.sender] = true;
        creationTime[tokenId] = block.timestamp;
        _safeMint(to, tokenId);
        emit Stake(msg.sender, tokenId, amount);
    }
    function unstake(uint256 tokenId) external nonReentrant {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Not authorized");
        _burn(tokenId);
        uint256 amount = stakingBalance[tokenId];
        delete stakingBalance[tokenId];
        stakeToken.safeTransfer(msg.sender, amount);
        emit Unstake(msg.sender, tokenId, amount);
    }

    function setCustomAttribute(uint256 tokenId, uint256 attribute) external auth {
        require(_customAttributes[tokenId] == 0, "Attribute already set");
        _customAttributes[tokenId] = attribute;
        emit CustomAttribute(tokenId, attribute);
    }

    function transferProtocolFee() external nonReentrant {
        if (protocolFeeTo != address(0) && protocolFeeBalance > 0) {
            uint256 _protocolFeeBalance = protocolFeeBalance;
            protocolFeeBalance = 0;
            stakeToken.safeTransfer(protocolFeeTo, _protocolFeeBalance);
        }
    }
}