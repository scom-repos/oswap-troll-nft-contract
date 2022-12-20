import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./TrollNFT_VRF.json";
export interface IDeployParams {name:string;symbol:string;baseURI:string;cap:number|BigNumber;stakeToken:string;requireApproval:boolean;minimumStake:number|BigNumber;protocolFee:number|BigNumber;protocolFeeTo:string;vrfAddresses:string[];vrfParams:string[]}
export interface IApproveParams {to:string;tokenId:number|BigNumber}
export interface IGetAttributes1Params {tokenId:number|BigNumber;base:number|BigNumber;offset:number|BigNumber;digits:number|BigNumber}
export interface IGetAttributes2Params {tokenId:number|BigNumber;base:number|BigNumber;digits:(number|BigNumber)[]}
export interface IIsApprovedForAllParams {owner:string;operator:string}
export interface IRawFulfillRandomnessParams {requestId:string;randomness:number|BigNumber}
export interface ISafeTransferFromParams {from:string;to:string;tokenId:number|BigNumber}
export interface ISafeTransferFrom_1Params {from:string;to:string;tokenId:number|BigNumber;data:string}
export interface ISetApprovalForAllParams {operator:string;approved:boolean}
export interface ISetApprovedStakerParams {staker:string;allow:boolean}
export interface ISetCustomAttributeParams {tokenId:number|BigNumber;attribute:number|BigNumber}
export interface ISetProtocolFeeParams {protocolFee:number|BigNumber;protocolFeeTo:string}
export interface ISetVrfParamsParams {vrfKeyHash:string;vrfFee:number|BigNumber}
export interface ITokenOfOwnerByIndexParams {owner:string;index:number|BigNumber}
export interface ITransferFromParams {from:string;to:string;tokenId:number|BigNumber}
export class TrollNFT_VRF extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.name,params.symbol,params.baseURI,this.wallet.utils.toString(params.cap),params.stakeToken,params.requireApproval,this.wallet.utils.toString(params.minimumStake),this.wallet.utils.toString(params.protocolFee),params.protocolFeeTo,params.vrfAddresses,this.wallet.utils.stringToBytes32(params.vrfParams)], options);
    }
    parseApprovalEvent(receipt: TransactionReceipt): TrollNFT_VRF.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): TrollNFT_VRF.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            approved: result.approved,
            tokenId: new BigNumber(result.tokenId),
            _event: event
        };
    }
    parseApprovalForAllEvent(receipt: TransactionReceipt): TrollNFT_VRF.ApprovalForAllEvent[]{
        return this.parseEvents(receipt, "ApprovalForAll").map(e=>this.decodeApprovalForAllEvent(e));
    }
    decodeApprovalForAllEvent(event: Event): TrollNFT_VRF.ApprovalForAllEvent{
        let result = event.data;
        return {
            owner: result.owner,
            operator: result.operator,
            approved: result.approved,
            _event: event
        };
    }
    parseApprovedStakerEvent(receipt: TransactionReceipt): TrollNFT_VRF.ApprovedStakerEvent[]{
        return this.parseEvents(receipt, "ApprovedStaker").map(e=>this.decodeApprovedStakerEvent(e));
    }
    decodeApprovedStakerEvent(event: Event): TrollNFT_VRF.ApprovedStakerEvent{
        let result = event.data;
        return {
            staker: result.staker,
            allow: result.allow,
            _event: event
        };
    }
    parseAttributeEvent(receipt: TransactionReceipt): TrollNFT_VRF.AttributeEvent[]{
        return this.parseEvents(receipt, "Attribute").map(e=>this.decodeAttributeEvent(e));
    }
    decodeAttributeEvent(event: Event): TrollNFT_VRF.AttributeEvent{
        let result = event.data;
        return {
            tokenId: new BigNumber(result.tokenId),
            attribute: new BigNumber(result.attribute),
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): TrollNFT_VRF.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): TrollNFT_VRF.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseBaseURIEvent(receipt: TransactionReceipt): TrollNFT_VRF.BaseURIEvent[]{
        return this.parseEvents(receipt, "BaseURI").map(e=>this.decodeBaseURIEvent(e));
    }
    decodeBaseURIEvent(event: Event): TrollNFT_VRF.BaseURIEvent{
        let result = event.data;
        return {
            baseURI: result.baseURI,
            _event: event
        };
    }
    parseCapEvent(receipt: TransactionReceipt): TrollNFT_VRF.CapEvent[]{
        return this.parseEvents(receipt, "Cap").map(e=>this.decodeCapEvent(e));
    }
    decodeCapEvent(event: Event): TrollNFT_VRF.CapEvent{
        let result = event.data;
        return {
            cap: new BigNumber(result.cap),
            _event: event
        };
    }
    parseCustomAttributeEvent(receipt: TransactionReceipt): TrollNFT_VRF.CustomAttributeEvent[]{
        return this.parseEvents(receipt, "CustomAttribute").map(e=>this.decodeCustomAttributeEvent(e));
    }
    decodeCustomAttributeEvent(event: Event): TrollNFT_VRF.CustomAttributeEvent{
        let result = event.data;
        return {
            tokenId: new BigNumber(result.tokenId),
            attribute: new BigNumber(result.attribute),
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): TrollNFT_VRF.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): TrollNFT_VRF.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseMinimumStakeEvent(receipt: TransactionReceipt): TrollNFT_VRF.MinimumStakeEvent[]{
        return this.parseEvents(receipt, "MinimumStake").map(e=>this.decodeMinimumStakeEvent(e));
    }
    decodeMinimumStakeEvent(event: Event): TrollNFT_VRF.MinimumStakeEvent{
        let result = event.data;
        return {
            minimumStake: new BigNumber(result.minimumStake),
            _event: event
        };
    }
    parseProtocolFeeEvent(receipt: TransactionReceipt): TrollNFT_VRF.ProtocolFeeEvent[]{
        return this.parseEvents(receipt, "ProtocolFee").map(e=>this.decodeProtocolFeeEvent(e));
    }
    decodeProtocolFeeEvent(event: Event): TrollNFT_VRF.ProtocolFeeEvent{
        let result = event.data;
        return {
            protocolFee: new BigNumber(result.protocolFee),
            protocolFeeTo: result.protocolFeeTo,
            _event: event
        };
    }
    parseStakeEvent(receipt: TransactionReceipt): TrollNFT_VRF.StakeEvent[]{
        return this.parseEvents(receipt, "Stake").map(e=>this.decodeStakeEvent(e));
    }
    decodeStakeEvent(event: Event): TrollNFT_VRF.StakeEvent{
        let result = event.data;
        return {
            who: result.who,
            tokenId: new BigNumber(result.tokenId),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): TrollNFT_VRF.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): TrollNFT_VRF.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): TrollNFT_VRF.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): TrollNFT_VRF.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            tokenId: new BigNumber(result.tokenId),
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): TrollNFT_VRF.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): TrollNFT_VRF.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnstakeEvent(receipt: TransactionReceipt): TrollNFT_VRF.UnstakeEvent[]{
        return this.parseEvents(receipt, "Unstake").map(e=>this.decodeUnstakeEvent(e));
    }
    decodeUnstakeEvent(event: Event): TrollNFT_VRF.UnstakeEvent{
        let result = event.data;
        return {
            who: result.who,
            tokenId: new BigNumber(result.tokenId),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    _attributes: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    _customAttributes: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<void>;
    }
    approvedStaker: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    balanceOf: {
        (owner:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    baseURI: {
        (options?: TransactionOptions): Promise<string>;
    }
    batchApprove: {
        (stakers:string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (stakers:string[], options?: TransactionOptions) => Promise<void>;
    }
    cap: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    counter: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    creationTime: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    getApproved: {
        (tokenId:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    getAttributes1: {
        (params: IGetAttributes1Params, options?: TransactionOptions): Promise<BigNumber>;
    }
    getAttributes2: {
        (params: IGetAttributes2Params, options?: TransactionOptions): Promise<BigNumber[]>;
    }
    isApprovedForAll: {
        (params: IIsApprovedForAllParams, options?: TransactionOptions): Promise<boolean>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    minimumStake: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    minted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    name: {
        (options?: TransactionOptions): Promise<string>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    ownerOf: {
        (tokenId:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    permit: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    protocolFee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    protocolFeeBalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    protocolFeeTo: {
        (options?: TransactionOptions): Promise<string>;
    }
    rawFulfillRandomness: {
        (params: IRawFulfillRandomnessParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRawFulfillRandomnessParams, options?: TransactionOptions) => Promise<void>;
    }
    requireApproval: {
        (options?: TransactionOptions): Promise<boolean>;
    }
    safeTransferFrom: {
        (params: ISafeTransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFromParams, options?: TransactionOptions) => Promise<void>;
    }
    safeTransferFrom_1: {
        (params: ISafeTransferFrom_1Params, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFrom_1Params, options?: TransactionOptions) => Promise<void>;
    }
    setApprovalForAll: {
        (params: ISetApprovalForAllParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetApprovalForAllParams, options?: TransactionOptions) => Promise<void>;
    }
    setApprovedStaker: {
        (params: ISetApprovedStakerParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetApprovedStakerParams, options?: TransactionOptions) => Promise<void>;
    }
    setBaseURI: {
        (baseURI:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (baseURI:string, options?: TransactionOptions) => Promise<void>;
    }
    setCap: {
        (cap:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (cap:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    setCustomAttribute: {
        (params: ISetCustomAttributeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetCustomAttributeParams, options?: TransactionOptions) => Promise<void>;
    }
    setMinimumStake: {
        (minimumStake:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (minimumStake:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    setProtocolFee: {
        (params: ISetProtocolFeeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetProtocolFeeParams, options?: TransactionOptions) => Promise<void>;
    }
    setVrfParams: {
        (params: ISetVrfParamsParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetVrfParamsParams, options?: TransactionOptions) => Promise<void>;
    }
    stake: {
        (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber, options?: TransactionOptions) => Promise<BigNumber>;
    }
    stakeToken: {
        (options?: TransactionOptions): Promise<string>;
    }
    stakingBalance: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    supportsInterface: {
        (interfaceId:string, options?: TransactionOptions): Promise<boolean>;
    }
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    tokenByIndex: {
        (index:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    tokenOfOwnerByIndex: {
        (params: ITokenOfOwnerByIndexParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    tokenURI: {
        (tokenId:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    totalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    transferFrom: {
        (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    transferProtocolFee: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    unstake: {
        (tokenId:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (tokenId:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    withdrawLink: {
        (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let _attributes_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('_attributes',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this._attributes = _attributes_call
        let _customAttributes_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('_customAttributes',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this._customAttributes = _customAttributes_call
        let approvedStaker_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('approvedStaker',[param1],options);
            return result;
        }
        this.approvedStaker = approvedStaker_call
        let balanceOf_call = async (owner:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[owner],options);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let baseURI_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('baseURI',[],options);
            return result;
        }
        this.baseURI = baseURI_call
        let cap_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('cap',[],options);
            return new BigNumber(result);
        }
        this.cap = cap_call
        let counter_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('counter',[],options);
            return new BigNumber(result);
        }
        this.counter = counter_call
        let creationTime_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('creationTime',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.creationTime = creationTime_call
        let getApproved_call = async (tokenId:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('getApproved',[this.wallet.utils.toString(tokenId)],options);
            return result;
        }
        this.getApproved = getApproved_call
        let getAttributes1Params = (params: IGetAttributes1Params) => [this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.base),this.wallet.utils.toString(params.offset),this.wallet.utils.toString(params.digits)];
        let getAttributes1_call = async (params: IGetAttributes1Params, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getAttributes1',getAttributes1Params(params),options);
            return new BigNumber(result);
        }
        this.getAttributes1 = getAttributes1_call
        let getAttributes2Params = (params: IGetAttributes2Params) => [this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.base),this.wallet.utils.toString(params.digits)];
        let getAttributes2_call = async (params: IGetAttributes2Params, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('getAttributes2',getAttributes2Params(params),options);
            return result.map(e=>new BigNumber(e));
        }
        this.getAttributes2 = getAttributes2_call
        let isApprovedForAllParams = (params: IIsApprovedForAllParams) => [params.owner,params.operator];
        let isApprovedForAll_call = async (params: IIsApprovedForAllParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isApprovedForAll',isApprovedForAllParams(params),options);
            return result;
        }
        this.isApprovedForAll = isApprovedForAll_call
        let isPermitted_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1],options);
            return result;
        }
        this.isPermitted = isPermitted_call
        let minimumStake_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('minimumStake',[],options);
            return new BigNumber(result);
        }
        this.minimumStake = minimumStake_call
        let minted_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('minted',[param1],options);
            return result;
        }
        this.minted = minted_call
        let name_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('name',[],options);
            return result;
        }
        this.name = name_call
        let newOwner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('newOwner',[],options);
            return result;
        }
        this.newOwner = newOwner_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let ownerOf_call = async (tokenId:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('ownerOf',[this.wallet.utils.toString(tokenId)],options);
            return result;
        }
        this.ownerOf = ownerOf_call
        let protocolFee_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('protocolFee',[],options);
            return new BigNumber(result);
        }
        this.protocolFee = protocolFee_call
        let protocolFeeBalance_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('protocolFeeBalance',[],options);
            return new BigNumber(result);
        }
        this.protocolFeeBalance = protocolFeeBalance_call
        let protocolFeeTo_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('protocolFeeTo',[],options);
            return result;
        }
        this.protocolFeeTo = protocolFeeTo_call
        let requireApproval_call = async (options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('requireApproval',[],options);
            return result;
        }
        this.requireApproval = requireApproval_call
        let stakeToken_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('stakeToken',[],options);
            return result;
        }
        this.stakeToken = stakeToken_call
        let stakingBalance_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('stakingBalance',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.stakingBalance = stakingBalance_call
        let supportsInterface_call = async (interfaceId:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('supportsInterface',[interfaceId],options);
            return result;
        }
        this.supportsInterface = supportsInterface_call
        let symbol_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('symbol',[],options);
            return result;
        }
        this.symbol = symbol_call
        let tokenByIndex_call = async (index:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('tokenByIndex',[this.wallet.utils.toString(index)],options);
            return new BigNumber(result);
        }
        this.tokenByIndex = tokenByIndex_call
        let tokenOfOwnerByIndexParams = (params: ITokenOfOwnerByIndexParams) => [params.owner,this.wallet.utils.toString(params.index)];
        let tokenOfOwnerByIndex_call = async (params: ITokenOfOwnerByIndexParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('tokenOfOwnerByIndex',tokenOfOwnerByIndexParams(params),options);
            return new BigNumber(result);
        }
        this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call
        let tokenURI_call = async (tokenId:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('tokenURI',[this.wallet.utils.toString(tokenId)],options);
            return result;
        }
        this.tokenURI = tokenURI_call
        let totalSupply_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalSupply',[],options);
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let approveParams = (params: IApproveParams) => [params.to,this.wallet.utils.toString(params.tokenId)];
        let approve_send = async (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('approve',approveParams(params),options);
            return result;
        }
        let approve_call = async (params: IApproveParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('approve',approveParams(params),options);
            return;
        }
        this.approve = Object.assign(approve_send, {
            call:approve_call
        });
        let batchApprove_send = async (stakers:string[], options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('batchApprove',[stakers],options);
            return result;
        }
        let batchApprove_call = async (stakers:string[], options?: TransactionOptions): Promise<void> => {
            let result = await this.call('batchApprove',[stakers],options);
            return;
        }
        this.batchApprove = Object.assign(batchApprove_send, {
            call:batchApprove_call
        });
        let deny_send = async (user:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('deny',[user],options);
            return result;
        }
        let deny_call = async (user:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('deny',[user],options);
            return;
        }
        this.deny = Object.assign(deny_send, {
            call:deny_call
        });
        let permit_send = async (user:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('permit',[user],options);
            return result;
        }
        let permit_call = async (user:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('permit',[user],options);
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let rawFulfillRandomnessParams = (params: IRawFulfillRandomnessParams) => [this.wallet.utils.stringToBytes32(params.requestId),this.wallet.utils.toString(params.randomness)];
        let rawFulfillRandomness_send = async (params: IRawFulfillRandomnessParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('rawFulfillRandomness',rawFulfillRandomnessParams(params),options);
            return result;
        }
        let rawFulfillRandomness_call = async (params: IRawFulfillRandomnessParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('rawFulfillRandomness',rawFulfillRandomnessParams(params),options);
            return;
        }
        this.rawFulfillRandomness = Object.assign(rawFulfillRandomness_send, {
            call:rawFulfillRandomness_call
        });
        let safeTransferFromParams = (params: ISafeTransferFromParams) => [params.from,params.to,this.wallet.utils.toString(params.tokenId)];
        let safeTransferFrom_send = async (params: ISafeTransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('safeTransferFrom',safeTransferFromParams(params),options);
            return result;
        }
        let safeTransferFrom_call = async (params: ISafeTransferFromParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('safeTransferFrom',safeTransferFromParams(params),options);
            return;
        }
        this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
            call:safeTransferFrom_call
        });
        let safeTransferFrom_1Params = (params: ISafeTransferFrom_1Params) => [params.from,params.to,this.wallet.utils.toString(params.tokenId),this.wallet.utils.stringToBytes(params.data)];
        let safeTransferFrom_1_send = async (params: ISafeTransferFrom_1Params, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('safeTransferFrom',safeTransferFrom_1Params(params),options);
            return result;
        }
        let safeTransferFrom_1_call = async (params: ISafeTransferFrom_1Params, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('safeTransferFrom',safeTransferFrom_1Params(params),options);
            return;
        }
        this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
            call:safeTransferFrom_1_call
        });
        let setApprovalForAllParams = (params: ISetApprovalForAllParams) => [params.operator,params.approved];
        let setApprovalForAll_send = async (params: ISetApprovalForAllParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setApprovalForAll',setApprovalForAllParams(params),options);
            return result;
        }
        let setApprovalForAll_call = async (params: ISetApprovalForAllParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setApprovalForAll',setApprovalForAllParams(params),options);
            return;
        }
        this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
            call:setApprovalForAll_call
        });
        let setApprovedStakerParams = (params: ISetApprovedStakerParams) => [params.staker,params.allow];
        let setApprovedStaker_send = async (params: ISetApprovedStakerParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setApprovedStaker',setApprovedStakerParams(params),options);
            return result;
        }
        let setApprovedStaker_call = async (params: ISetApprovedStakerParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setApprovedStaker',setApprovedStakerParams(params),options);
            return;
        }
        this.setApprovedStaker = Object.assign(setApprovedStaker_send, {
            call:setApprovedStaker_call
        });
        let setBaseURI_send = async (baseURI:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setBaseURI',[baseURI],options);
            return result;
        }
        let setBaseURI_call = async (baseURI:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setBaseURI',[baseURI],options);
            return;
        }
        this.setBaseURI = Object.assign(setBaseURI_send, {
            call:setBaseURI_call
        });
        let setCap_send = async (cap:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setCap',[this.wallet.utils.toString(cap)],options);
            return result;
        }
        let setCap_call = async (cap:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setCap',[this.wallet.utils.toString(cap)],options);
            return;
        }
        this.setCap = Object.assign(setCap_send, {
            call:setCap_call
        });
        let setCustomAttributeParams = (params: ISetCustomAttributeParams) => [this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.attribute)];
        let setCustomAttribute_send = async (params: ISetCustomAttributeParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setCustomAttribute',setCustomAttributeParams(params),options);
            return result;
        }
        let setCustomAttribute_call = async (params: ISetCustomAttributeParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setCustomAttribute',setCustomAttributeParams(params),options);
            return;
        }
        this.setCustomAttribute = Object.assign(setCustomAttribute_send, {
            call:setCustomAttribute_call
        });
        let setMinimumStake_send = async (minimumStake:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setMinimumStake',[this.wallet.utils.toString(minimumStake)],options);
            return result;
        }
        let setMinimumStake_call = async (minimumStake:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setMinimumStake',[this.wallet.utils.toString(minimumStake)],options);
            return;
        }
        this.setMinimumStake = Object.assign(setMinimumStake_send, {
            call:setMinimumStake_call
        });
        let setProtocolFeeParams = (params: ISetProtocolFeeParams) => [this.wallet.utils.toString(params.protocolFee),params.protocolFeeTo];
        let setProtocolFee_send = async (params: ISetProtocolFeeParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setProtocolFee',setProtocolFeeParams(params),options);
            return result;
        }
        let setProtocolFee_call = async (params: ISetProtocolFeeParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setProtocolFee',setProtocolFeeParams(params),options);
            return;
        }
        this.setProtocolFee = Object.assign(setProtocolFee_send, {
            call:setProtocolFee_call
        });
        let setVrfParamsParams = (params: ISetVrfParamsParams) => [this.wallet.utils.stringToBytes32(params.vrfKeyHash),this.wallet.utils.toString(params.vrfFee)];
        let setVrfParams_send = async (params: ISetVrfParamsParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setVrfParams',setVrfParamsParams(params),options);
            return result;
        }
        let setVrfParams_call = async (params: ISetVrfParamsParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setVrfParams',setVrfParamsParams(params),options);
            return;
        }
        this.setVrfParams = Object.assign(setVrfParams_send, {
            call:setVrfParams_call
        });
        let stake_send = async (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('stake',[this.wallet.utils.toString(amount)],options);
            return result;
        }
        let stake_call = async (amount:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('stake',[this.wallet.utils.toString(amount)],options);
            return new BigNumber(result);
        }
        this.stake = Object.assign(stake_send, {
            call:stake_call
        });
        let takeOwnership_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('takeOwnership',[],options);
            return result;
        }
        let takeOwnership_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('takeOwnership',[],options);
            return;
        }
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call:takeOwnership_call
        });
        let transferFromParams = (params: ITransferFromParams) => [params.from,params.to,this.wallet.utils.toString(params.tokenId)];
        let transferFrom_send = async (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferFrom',transferFromParams(params),options);
            return result;
        }
        let transferFrom_call = async (params: ITransferFromParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferFrom',transferFromParams(params),options);
            return;
        }
        this.transferFrom = Object.assign(transferFrom_send, {
            call:transferFrom_call
        });
        let transferOwnership_send = async (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner],options);
            return result;
        }
        let transferOwnership_call = async (newOwner:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner],options);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
        let transferProtocolFee_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferProtocolFee',[],options);
            return result;
        }
        let transferProtocolFee_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferProtocolFee',[],options);
            return;
        }
        this.transferProtocolFee = Object.assign(transferProtocolFee_send, {
            call:transferProtocolFee_call
        });
        let unstake_send = async (tokenId:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unstake',[this.wallet.utils.toString(tokenId)],options);
            return result;
        }
        let unstake_call = async (tokenId:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('unstake',[this.wallet.utils.toString(tokenId)],options);
            return;
        }
        this.unstake = Object.assign(unstake_send, {
            call:unstake_call
        });
        let withdrawLink_send = async (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('withdrawLink',[this.wallet.utils.toString(amount)],options);
            return result;
        }
        let withdrawLink_call = async (amount:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('withdrawLink',[this.wallet.utils.toString(amount)],options);
            return;
        }
        this.withdrawLink = Object.assign(withdrawLink_send, {
            call:withdrawLink_call
        });
    }
}
export module TrollNFT_VRF{
    export interface ApprovalEvent {owner:string,approved:string,tokenId:BigNumber,_event:Event}
    export interface ApprovalForAllEvent {owner:string,operator:string,approved:boolean,_event:Event}
    export interface ApprovedStakerEvent {staker:string,allow:boolean,_event:Event}
    export interface AttributeEvent {tokenId:BigNumber,attribute:BigNumber,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface BaseURIEvent {baseURI:string,_event:Event}
    export interface CapEvent {cap:BigNumber,_event:Event}
    export interface CustomAttributeEvent {tokenId:BigNumber,attribute:BigNumber,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface MinimumStakeEvent {minimumStake:BigNumber,_event:Event}
    export interface ProtocolFeeEvent {protocolFee:BigNumber,protocolFeeTo:string,_event:Event}
    export interface StakeEvent {who:string,tokenId:BigNumber,amount:BigNumber,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferEvent {from:string,to:string,tokenId:BigNumber,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UnstakeEvent {who:string,tokenId:BigNumber,amount:BigNumber,_event:Event}
}