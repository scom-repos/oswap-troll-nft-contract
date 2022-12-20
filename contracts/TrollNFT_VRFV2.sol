// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.4;

import "./TrollNFTV2.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract TrollNFT_VRFV2 is TrollNFTV2, VRFConsumerBase {

    bytes32 private vrfKeyHash;
    uint256 private vrfFee;
    mapping(bytes32 => uint256) private vrfRequests;

    struct VRFInfo {
        address[2] vrfAddresses; // vrfCoordinator, linkToken
        bytes32[2] vrfParams; // keyHash, fee
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
        NFTInfo memory _nftInfo,
        VRFInfo memory _vrfInfo
    ) 
    TrollNFTV2 (
        _name, 
        _symbol, 
        __baseURI, 
        _cap, 
        _stakeToken, 
        _requireApproval, 
        _minimumStake, 
        _protocolFee, 
        _protocolFeeTo,
        _nftInfo
    ) 
    VRFConsumerBase(
        _vrfInfo.vrfAddresses[0],
        _vrfInfo.vrfAddresses[1]
    ) 
    {
        setVrfParams(_vrfInfo.vrfParams[0], uint256(_vrfInfo.vrfParams[1]));
    }


    function setVrfParams(bytes32 _vrfKeyHash, uint256 _vrfFee) public onlyOwner {
        vrfKeyHash = _vrfKeyHash;
        vrfFee = _vrfFee;
    }

    function stake(uint256 amount) external override returns (uint256 tokenId) {
        tokenId = _stake(amount);

        require(LINK.balanceOf(address(this)) >= vrfFee, "Not enough LINK");
        bytes32 requestId = requestRandomness(vrfKeyHash, vrfFee);
        vrfRequests[requestId] = tokenId;
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        uint256 tokenId = vrfRequests[requestId];
        _attributes[tokenId] = randomness;
        emit Attribute(tokenId, randomness);
    }

    function withdrawLink(uint256 amount) external onlyOwner {
        SafeERC20.safeTransfer(IERC20(address(LINK)), msg.sender, amount);
    }
}