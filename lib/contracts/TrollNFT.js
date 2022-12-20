"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrollNFT = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const TrollNFT_json_1 = __importDefault(require("./TrollNFT.json"));
class TrollNFT extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, TrollNFT_json_1.default.abi, TrollNFT_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.name, params.symbol, params.baseURI, this.wallet.utils.toString(params.cap), params.stakeToken, params.requireApproval, this.wallet.utils.toString(params.minimumStake), this.wallet.utils.toString(params.protocolFee), params.protocolFeeTo], options);
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            approved: result.approved,
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            _event: event
        };
    }
    parseApprovalForAllEvent(receipt) {
        return this.parseEvents(receipt, "ApprovalForAll").map(e => this.decodeApprovalForAllEvent(e));
    }
    decodeApprovalForAllEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            operator: result.operator,
            approved: result.approved,
            _event: event
        };
    }
    parseApprovedStakerEvent(receipt) {
        return this.parseEvents(receipt, "ApprovedStaker").map(e => this.decodeApprovedStakerEvent(e));
    }
    decodeApprovedStakerEvent(event) {
        let result = event.data;
        return {
            staker: result.staker,
            allow: result.allow,
            _event: event
        };
    }
    parseAttributeEvent(receipt) {
        return this.parseEvents(receipt, "Attribute").map(e => this.decodeAttributeEvent(e));
    }
    decodeAttributeEvent(event) {
        let result = event.data;
        return {
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            attribute: new eth_contract_1.BigNumber(result.attribute),
            _event: event
        };
    }
    parseAuthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseBaseURIEvent(receipt) {
        return this.parseEvents(receipt, "BaseURI").map(e => this.decodeBaseURIEvent(e));
    }
    decodeBaseURIEvent(event) {
        let result = event.data;
        return {
            baseURI: result.baseURI,
            _event: event
        };
    }
    parseCapEvent(receipt) {
        return this.parseEvents(receipt, "Cap").map(e => this.decodeCapEvent(e));
    }
    decodeCapEvent(event) {
        let result = event.data;
        return {
            cap: new eth_contract_1.BigNumber(result.cap),
            _event: event
        };
    }
    parseCustomAttributeEvent(receipt) {
        return this.parseEvents(receipt, "CustomAttribute").map(e => this.decodeCustomAttributeEvent(e));
    }
    decodeCustomAttributeEvent(event) {
        let result = event.data;
        return {
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            attribute: new eth_contract_1.BigNumber(result.attribute),
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseMinimumStakeEvent(receipt) {
        return this.parseEvents(receipt, "MinimumStake").map(e => this.decodeMinimumStakeEvent(e));
    }
    decodeMinimumStakeEvent(event) {
        let result = event.data;
        return {
            minimumStake: new eth_contract_1.BigNumber(result.minimumStake),
            _event: event
        };
    }
    parseProtocolFeeEvent(receipt) {
        return this.parseEvents(receipt, "ProtocolFee").map(e => this.decodeProtocolFeeEvent(e));
    }
    decodeProtocolFeeEvent(event) {
        let result = event.data;
        return {
            protocolFee: new eth_contract_1.BigNumber(result.protocolFee),
            protocolFeeTo: result.protocolFeeTo,
            _event: event
        };
    }
    parseStakeEvent(receipt) {
        return this.parseEvents(receipt, "Stake").map(e => this.decodeStakeEvent(e));
    }
    decodeStakeEvent(event) {
        let result = event.data;
        return {
            who: result.who,
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            amount: new eth_contract_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt) {
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt) {
        return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnstakeEvent(receipt) {
        return this.parseEvents(receipt, "Unstake").map(e => this.decodeUnstakeEvent(e));
    }
    decodeUnstakeEvent(event) {
        let result = event.data;
        return {
            who: result.who,
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            amount: new eth_contract_1.BigNumber(result.amount),
            _event: event
        };
    }
    assign() {
        let _attributes_call = async (param1, options) => {
            let result = await this.call('_attributes', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this._attributes = _attributes_call;
        let _customAttributes_call = async (param1, options) => {
            let result = await this.call('_customAttributes', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this._customAttributes = _customAttributes_call;
        let approvedStaker_call = async (param1, options) => {
            let result = await this.call('approvedStaker', [param1], options);
            return result;
        };
        this.approvedStaker = approvedStaker_call;
        let balanceOf_call = async (owner, options) => {
            let result = await this.call('balanceOf', [owner], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let baseURI_call = async (options) => {
            let result = await this.call('baseURI', [], options);
            return result;
        };
        this.baseURI = baseURI_call;
        let cap_call = async (options) => {
            let result = await this.call('cap', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.cap = cap_call;
        let counter_call = async (options) => {
            let result = await this.call('counter', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.counter = counter_call;
        let creationTime_call = async (param1, options) => {
            let result = await this.call('creationTime', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.creationTime = creationTime_call;
        let getApproved_call = async (tokenId, options) => {
            let result = await this.call('getApproved', [this.wallet.utils.toString(tokenId)], options);
            return result;
        };
        this.getApproved = getApproved_call;
        let getAttributes1Params = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.base), this.wallet.utils.toString(params.offset), this.wallet.utils.toString(params.digits)];
        let getAttributes1_call = async (params, options) => {
            let result = await this.call('getAttributes1', getAttributes1Params(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getAttributes1 = getAttributes1_call;
        let getAttributes2Params = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.base), this.wallet.utils.toString(params.digits)];
        let getAttributes2_call = async (params, options) => {
            let result = await this.call('getAttributes2', getAttributes2Params(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.getAttributes2 = getAttributes2_call;
        let isApprovedForAllParams = (params) => [params.owner, params.operator];
        let isApprovedForAll_call = async (params, options) => {
            let result = await this.call('isApprovedForAll', isApprovedForAllParams(params), options);
            return result;
        };
        this.isApprovedForAll = isApprovedForAll_call;
        let isPermitted_call = async (param1, options) => {
            let result = await this.call('isPermitted', [param1], options);
            return result;
        };
        this.isPermitted = isPermitted_call;
        let minimumStake_call = async (options) => {
            let result = await this.call('minimumStake', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.minimumStake = minimumStake_call;
        let minted_call = async (param1, options) => {
            let result = await this.call('minted', [param1], options);
            return result;
        };
        this.minted = minted_call;
        let name_call = async (options) => {
            let result = await this.call('name', [], options);
            return result;
        };
        this.name = name_call;
        let newOwner_call = async (options) => {
            let result = await this.call('newOwner', [], options);
            return result;
        };
        this.newOwner = newOwner_call;
        let owner_call = async (options) => {
            let result = await this.call('owner', [], options);
            return result;
        };
        this.owner = owner_call;
        let ownerOf_call = async (tokenId, options) => {
            let result = await this.call('ownerOf', [this.wallet.utils.toString(tokenId)], options);
            return result;
        };
        this.ownerOf = ownerOf_call;
        let protocolFee_call = async (options) => {
            let result = await this.call('protocolFee', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.protocolFee = protocolFee_call;
        let protocolFeeBalance_call = async (options) => {
            let result = await this.call('protocolFeeBalance', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.protocolFeeBalance = protocolFeeBalance_call;
        let protocolFeeTo_call = async (options) => {
            let result = await this.call('protocolFeeTo', [], options);
            return result;
        };
        this.protocolFeeTo = protocolFeeTo_call;
        let requireApproval_call = async (options) => {
            let result = await this.call('requireApproval', [], options);
            return result;
        };
        this.requireApproval = requireApproval_call;
        let stakeToken_call = async (options) => {
            let result = await this.call('stakeToken', [], options);
            return result;
        };
        this.stakeToken = stakeToken_call;
        let stakingBalance_call = async (param1, options) => {
            let result = await this.call('stakingBalance', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.stakingBalance = stakingBalance_call;
        let supportsInterface_call = async (interfaceId, options) => {
            let result = await this.call('supportsInterface', [interfaceId], options);
            return result;
        };
        this.supportsInterface = supportsInterface_call;
        let symbol_call = async (options) => {
            let result = await this.call('symbol', [], options);
            return result;
        };
        this.symbol = symbol_call;
        let tokenByIndex_call = async (index, options) => {
            let result = await this.call('tokenByIndex', [this.wallet.utils.toString(index)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.tokenByIndex = tokenByIndex_call;
        let tokenOfOwnerByIndexParams = (params) => [params.owner, this.wallet.utils.toString(params.index)];
        let tokenOfOwnerByIndex_call = async (params, options) => {
            let result = await this.call('tokenOfOwnerByIndex', tokenOfOwnerByIndexParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call;
        let tokenURI_call = async (tokenId, options) => {
            let result = await this.call('tokenURI', [this.wallet.utils.toString(tokenId)], options);
            return result;
        };
        this.tokenURI = tokenURI_call;
        let totalSupply_call = async (options) => {
            let result = await this.call('totalSupply', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let approveParams = (params) => [params.to, this.wallet.utils.toString(params.tokenId)];
        let approve_send = async (params, options) => {
            let result = await this.send('approve', approveParams(params), options);
            return result;
        };
        let approve_call = async (params, options) => {
            let result = await this.call('approve', approveParams(params), options);
            return;
        };
        this.approve = Object.assign(approve_send, {
            call: approve_call
        });
        let batchApprove_send = async (stakers, options) => {
            let result = await this.send('batchApprove', [stakers], options);
            return result;
        };
        let batchApprove_call = async (stakers, options) => {
            let result = await this.call('batchApprove', [stakers], options);
            return;
        };
        this.batchApprove = Object.assign(batchApprove_send, {
            call: batchApprove_call
        });
        let deny_send = async (user, options) => {
            let result = await this.send('deny', [user], options);
            return result;
        };
        let deny_call = async (user, options) => {
            let result = await this.call('deny', [user], options);
            return;
        };
        this.deny = Object.assign(deny_send, {
            call: deny_call
        });
        let permit_send = async (user, options) => {
            let result = await this.send('permit', [user], options);
            return result;
        };
        let permit_call = async (user, options) => {
            let result = await this.call('permit', [user], options);
            return;
        };
        this.permit = Object.assign(permit_send, {
            call: permit_call
        });
        let safeTransferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
        let safeTransferFrom_send = async (params, options) => {
            let result = await this.send('safeTransferFrom', safeTransferFromParams(params), options);
            return result;
        };
        let safeTransferFrom_call = async (params, options) => {
            let result = await this.call('safeTransferFrom', safeTransferFromParams(params), options);
            return;
        };
        this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
            call: safeTransferFrom_call
        });
        let safeTransferFrom_1Params = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId), this.wallet.utils.stringToBytes(params.data)];
        let safeTransferFrom_1_send = async (params, options) => {
            let result = await this.send('safeTransferFrom', safeTransferFrom_1Params(params), options);
            return result;
        };
        let safeTransferFrom_1_call = async (params, options) => {
            let result = await this.call('safeTransferFrom', safeTransferFrom_1Params(params), options);
            return;
        };
        this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
            call: safeTransferFrom_1_call
        });
        let setApprovalForAllParams = (params) => [params.operator, params.approved];
        let setApprovalForAll_send = async (params, options) => {
            let result = await this.send('setApprovalForAll', setApprovalForAllParams(params), options);
            return result;
        };
        let setApprovalForAll_call = async (params, options) => {
            let result = await this.call('setApprovalForAll', setApprovalForAllParams(params), options);
            return;
        };
        this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
            call: setApprovalForAll_call
        });
        let setApprovedStakerParams = (params) => [params.staker, params.allow];
        let setApprovedStaker_send = async (params, options) => {
            let result = await this.send('setApprovedStaker', setApprovedStakerParams(params), options);
            return result;
        };
        let setApprovedStaker_call = async (params, options) => {
            let result = await this.call('setApprovedStaker', setApprovedStakerParams(params), options);
            return;
        };
        this.setApprovedStaker = Object.assign(setApprovedStaker_send, {
            call: setApprovedStaker_call
        });
        let setBaseURI_send = async (baseURI, options) => {
            let result = await this.send('setBaseURI', [baseURI], options);
            return result;
        };
        let setBaseURI_call = async (baseURI, options) => {
            let result = await this.call('setBaseURI', [baseURI], options);
            return;
        };
        this.setBaseURI = Object.assign(setBaseURI_send, {
            call: setBaseURI_call
        });
        let setCap_send = async (cap, options) => {
            let result = await this.send('setCap', [this.wallet.utils.toString(cap)], options);
            return result;
        };
        let setCap_call = async (cap, options) => {
            let result = await this.call('setCap', [this.wallet.utils.toString(cap)], options);
            return;
        };
        this.setCap = Object.assign(setCap_send, {
            call: setCap_call
        });
        let setCustomAttributeParams = (params) => [this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.attribute)];
        let setCustomAttribute_send = async (params, options) => {
            let result = await this.send('setCustomAttribute', setCustomAttributeParams(params), options);
            return result;
        };
        let setCustomAttribute_call = async (params, options) => {
            let result = await this.call('setCustomAttribute', setCustomAttributeParams(params), options);
            return;
        };
        this.setCustomAttribute = Object.assign(setCustomAttribute_send, {
            call: setCustomAttribute_call
        });
        let setMinimumStake_send = async (minimumStake, options) => {
            let result = await this.send('setMinimumStake', [this.wallet.utils.toString(minimumStake)], options);
            return result;
        };
        let setMinimumStake_call = async (minimumStake, options) => {
            let result = await this.call('setMinimumStake', [this.wallet.utils.toString(minimumStake)], options);
            return;
        };
        this.setMinimumStake = Object.assign(setMinimumStake_send, {
            call: setMinimumStake_call
        });
        let setProtocolFeeParams = (params) => [this.wallet.utils.toString(params.protocolFee), params.protocolFeeTo];
        let setProtocolFee_send = async (params, options) => {
            let result = await this.send('setProtocolFee', setProtocolFeeParams(params), options);
            return result;
        };
        let setProtocolFee_call = async (params, options) => {
            let result = await this.call('setProtocolFee', setProtocolFeeParams(params), options);
            return;
        };
        this.setProtocolFee = Object.assign(setProtocolFee_send, {
            call: setProtocolFee_call
        });
        let stake_send = async (amount, options) => {
            let result = await this.send('stake', [this.wallet.utils.toString(amount)], options);
            return result;
        };
        let stake_call = async (amount, options) => {
            let result = await this.call('stake', [this.wallet.utils.toString(amount)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.stake = Object.assign(stake_send, {
            call: stake_call
        });
        let takeOwnership_send = async (options) => {
            let result = await this.send('takeOwnership', [], options);
            return result;
        };
        let takeOwnership_call = async (options) => {
            let result = await this.call('takeOwnership', [], options);
            return;
        };
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call: takeOwnership_call
        });
        let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.tokenId)];
        let transferFrom_send = async (params, options) => {
            let result = await this.send('transferFrom', transferFromParams(params), options);
            return result;
        };
        let transferFrom_call = async (params, options) => {
            let result = await this.call('transferFrom', transferFromParams(params), options);
            return;
        };
        this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
        });
        let transferOwnership_send = async (newOwner, options) => {
            let result = await this.send('transferOwnership', [newOwner], options);
            return result;
        };
        let transferOwnership_call = async (newOwner, options) => {
            let result = await this.call('transferOwnership', [newOwner], options);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
        let transferProtocolFee_send = async (options) => {
            let result = await this.send('transferProtocolFee', [], options);
            return result;
        };
        let transferProtocolFee_call = async (options) => {
            let result = await this.call('transferProtocolFee', [], options);
            return;
        };
        this.transferProtocolFee = Object.assign(transferProtocolFee_send, {
            call: transferProtocolFee_call
        });
        let unstake_send = async (tokenId, options) => {
            let result = await this.send('unstake', [this.wallet.utils.toString(tokenId)], options);
            return result;
        };
        let unstake_call = async (tokenId, options) => {
            let result = await this.call('unstake', [this.wallet.utils.toString(tokenId)], options);
            return;
        };
        this.unstake = Object.assign(unstake_send, {
            call: unstake_call
        });
    }
}
exports.TrollNFT = TrollNFT;
TrollNFT._abi = TrollNFT_json_1.default.abi;
