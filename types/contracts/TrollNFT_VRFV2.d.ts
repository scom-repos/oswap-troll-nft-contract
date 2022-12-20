import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    name: string;
    symbol: string;
    baseURI: string;
    cap: number | BigNumber;
    stakeToken: string;
    requireApproval: boolean;
    minimumStake: number | BigNumber;
    protocolFee: number | BigNumber;
    protocolFeeTo: string;
    nftInfo: {
        listValidNFTs: string[];
        maximumValidNFTs: number | BigNumber;
    };
    vrfInfo: {
        vrfAddresses: string[];
        vrfParams: string[];
    };
}
export interface I_stakesTransferAllowancesParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IAddStakesParams {
    tokenId: number | BigNumber;
    amount: number | BigNumber;
}
export interface IApproveParams {
    to: string;
    tokenId: number | BigNumber;
}
export interface IEquipNFTParams {
    trollId: number | BigNumber;
    nft: string;
    nftId: number | BigNumber;
}
export interface IGetAttributes1Params {
    tokenId: number | BigNumber;
    base: number | BigNumber;
    offset: number | BigNumber;
    digits: number | BigNumber;
}
export interface IGetAttributes2Params {
    tokenId: number | BigNumber;
    base: number | BigNumber;
    digits: (number | BigNumber)[];
}
export interface IIsApprovedForAllParams {
    owner: string;
    operator: string;
}
export interface INftsEquippedParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IRawFulfillRandomnessParams {
    requestId: string;
    randomness: number | BigNumber;
}
export interface ISafeTransferFromParams {
    from: string;
    to: string;
    tokenId: number | BigNumber;
}
export interface ISafeTransferFrom_1Params {
    from: string;
    to: string;
    tokenId: number | BigNumber;
    data: string;
}
export interface ISetApprovalForAllParams {
    operator: string;
    approved: boolean;
}
export interface ISetApprovedStakerParams {
    staker: string;
    allow: boolean;
}
export interface ISetCustomAttributeParams {
    tokenId: number | BigNumber;
    attribute: number | BigNumber;
}
export interface ISetProtocolFeeParams {
    protocolFee: number | BigNumber;
    protocolFeeTo: string;
}
export interface ISetVrfParamsParams {
    vrfKeyHash: string;
    vrfFee: number | BigNumber;
}
export interface ITokenOfOwnerByIndexParams {
    owner: string;
    index: number | BigNumber;
}
export interface ITransferFromParams {
    from: string;
    to: string;
    tokenId: number | BigNumber;
}
export interface ITrollOwnedNFTsParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IUnequipNFTParams {
    trollId: number | BigNumber;
    nft: string;
    nftId: number | BigNumber;
}
export declare class TrollNFT_VRFV2 extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseAddStakesEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.AddStakesEvent[];
    decodeAddStakesEvent(event: Event): TrollNFT_VRFV2.AddStakesEvent;
    parseAddValidNFTEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.AddValidNFTEvent[];
    decodeAddValidNFTEvent(event: Event): TrollNFT_VRFV2.AddValidNFTEvent;
    parseApprovalEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.ApprovalEvent[];
    decodeApprovalEvent(event: Event): TrollNFT_VRFV2.ApprovalEvent;
    parseApprovalForAllEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.ApprovalForAllEvent[];
    decodeApprovalForAllEvent(event: Event): TrollNFT_VRFV2.ApprovalForAllEvent;
    parseApprovedStakerEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.ApprovedStakerEvent[];
    decodeApprovedStakerEvent(event: Event): TrollNFT_VRFV2.ApprovedStakerEvent;
    parseAttributeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.AttributeEvent[];
    decodeAttributeEvent(event: Event): TrollNFT_VRFV2.AttributeEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): TrollNFT_VRFV2.AuthorizeEvent;
    parseBaseURIEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.BaseURIEvent[];
    decodeBaseURIEvent(event: Event): TrollNFT_VRFV2.BaseURIEvent;
    parseCapEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.CapEvent[];
    decodeCapEvent(event: Event): TrollNFT_VRFV2.CapEvent;
    parseCustomAttributeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.CustomAttributeEvent[];
    decodeCustomAttributeEvent(event: Event): TrollNFT_VRFV2.CustomAttributeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): TrollNFT_VRFV2.DeauthorizeEvent;
    parseEquipNFTEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.EquipNFTEvent[];
    decodeEquipNFTEvent(event: Event): TrollNFT_VRFV2.EquipNFTEvent;
    parseMinimumStakeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.MinimumStakeEvent[];
    decodeMinimumStakeEvent(event: Event): TrollNFT_VRFV2.MinimumStakeEvent;
    parseProtocolFeeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.ProtocolFeeEvent[];
    decodeProtocolFeeEvent(event: Event): TrollNFT_VRFV2.ProtocolFeeEvent;
    parseStakeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.StakeEvent[];
    decodeStakeEvent(event: Event): TrollNFT_VRFV2.StakeEvent;
    parseStakesApprovalEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.StakesApprovalEvent[];
    decodeStakesApprovalEvent(event: Event): TrollNFT_VRFV2.StakesApprovalEvent;
    parseStakesTransferEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.StakesTransferEvent[];
    decodeStakesTransferEvent(event: Event): TrollNFT_VRFV2.StakesTransferEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): TrollNFT_VRFV2.StartOwnershipTransferEvent;
    parseTransferEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.TransferEvent[];
    decodeTransferEvent(event: Event): TrollNFT_VRFV2.TransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): TrollNFT_VRFV2.TransferOwnershipEvent;
    parseUnequipNFTEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.UnequipNFTEvent[];
    decodeUnequipNFTEvent(event: Event): TrollNFT_VRFV2.UnequipNFTEvent;
    parseUnstakeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.UnstakeEvent[];
    decodeUnstakeEvent(event: Event): TrollNFT_VRFV2.UnstakeEvent;
    _attributes: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    _customAttributes: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    _stakesTransferAllowances: {
        (params: I_stakesTransferAllowancesParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    addStakes: {
        (params: IAddStakesParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddStakesParams, options?: TransactionOptions) => Promise<void>;
    };
    addValidNFTs: {
        (nfts: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (nfts: string[], options?: TransactionOptions) => Promise<void>;
    };
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<void>;
    };
    approvedStaker: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    balanceOf: {
        (owner: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    baseURI: {
        (options?: TransactionOptions): Promise<string>;
    };
    batchApprove: {
        (stakers: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (stakers: string[], options?: TransactionOptions) => Promise<void>;
    };
    cap: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    counter: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    creationDate: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    destoryDate: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    equipNFT: {
        (params: IEquipNFTParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IEquipNFTParams, options?: TransactionOptions) => Promise<void>;
    };
    extraStakes: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    getApproved: {
        (tokenId: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    getAttributes1: {
        (params: IGetAttributes1Params, options?: TransactionOptions): Promise<BigNumber>;
    };
    getAttributes2: {
        (params: IGetAttributes2Params, options?: TransactionOptions): Promise<BigNumber[]>;
    };
    isApprovedForAll: {
        (params: IIsApprovedForAllParams, options?: TransactionOptions): Promise<boolean>;
    };
    isPermitted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    isValidNFT: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    lastStakeDate: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    listValidNFTs: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    maximumValidNFTs: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    minimumStake: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    minted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    name: {
        (options?: TransactionOptions): Promise<string>;
    };
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    };
    nftsEquipped: {
        (params: INftsEquippedParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    ownerOf: {
        (tokenId: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    permit: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    protocolFee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    protocolFeeBalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    protocolFeeTo: {
        (options?: TransactionOptions): Promise<string>;
    };
    rawFulfillRandomness: {
        (params: IRawFulfillRandomnessParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRawFulfillRandomnessParams, options?: TransactionOptions) => Promise<void>;
    };
    requireApproval: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    safeTransferFrom: {
        (params: ISafeTransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFromParams, options?: TransactionOptions) => Promise<void>;
    };
    safeTransferFrom_1: {
        (params: ISafeTransferFrom_1Params, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFrom_1Params, options?: TransactionOptions) => Promise<void>;
    };
    setApprovalForAll: {
        (params: ISetApprovalForAllParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetApprovalForAllParams, options?: TransactionOptions) => Promise<void>;
    };
    setApprovedStaker: {
        (params: ISetApprovedStakerParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetApprovedStakerParams, options?: TransactionOptions) => Promise<void>;
    };
    setBaseURI: {
        (baseURI: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (baseURI: string, options?: TransactionOptions) => Promise<void>;
    };
    setCap: {
        (cap: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (cap: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    setCustomAttribute: {
        (params: ISetCustomAttributeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetCustomAttributeParams, options?: TransactionOptions) => Promise<void>;
    };
    setMinimumStake: {
        (minimumStake: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (minimumStake: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    setProtocolFee: {
        (params: ISetProtocolFeeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetProtocolFeeParams, options?: TransactionOptions) => Promise<void>;
    };
    setVrfParams: {
        (params: ISetVrfParamsParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetVrfParamsParams, options?: TransactionOptions) => Promise<void>;
    };
    stake: {
        (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<BigNumber>;
    };
    stakeToken: {
        (options?: TransactionOptions): Promise<string>;
    };
    stakingBalance: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    supportsInterface: {
        (interfaceId: string, options?: TransactionOptions): Promise<boolean>;
    };
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    };
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    tokenByIndex: {
        (index: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    tokenOfOwnerByIndex: {
        (params: ITokenOfOwnerByIndexParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    tokenURI: {
        (tokenId: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    totalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transferFrom: {
        (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    transferProtocolFee: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    trollOwnedNFTs: {
        (params: ITrollOwnedNFTsParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    unequipNFT: {
        (params: IUnequipNFTParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnequipNFTParams, options?: TransactionOptions) => Promise<void>;
    };
    unstake: {
        (tokenId: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (tokenId: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    validNFTsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    withdrawLink: {
        (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module TrollNFT_VRFV2 {
    interface AddStakesEvent {
        tokenId: BigNumber;
        amountAdded: BigNumber;
        newAmount: BigNumber;
        _event: Event;
    }
    interface AddValidNFTEvent {
        nft: string;
        _event: Event;
    }
    interface ApprovalEvent {
        owner: string;
        approved: string;
        tokenId: BigNumber;
        _event: Event;
    }
    interface ApprovalForAllEvent {
        owner: string;
        operator: string;
        approved: boolean;
        _event: Event;
    }
    interface ApprovedStakerEvent {
        staker: string;
        allow: boolean;
        _event: Event;
    }
    interface AttributeEvent {
        tokenId: BigNumber;
        attribute: BigNumber;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface BaseURIEvent {
        baseURI: string;
        _event: Event;
    }
    interface CapEvent {
        cap: BigNumber;
        _event: Event;
    }
    interface CustomAttributeEvent {
        tokenId: BigNumber;
        attribute: BigNumber;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface EquipNFTEvent {
        trollId: BigNumber;
        nft: string;
        nftId: BigNumber;
        _event: Event;
    }
    interface MinimumStakeEvent {
        minimumStake: BigNumber;
        _event: Event;
    }
    interface ProtocolFeeEvent {
        protocolFee: BigNumber;
        protocolFeeTo: string;
        _event: Event;
    }
    interface StakeEvent {
        who: string;
        tokenId: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
    interface StakesApprovalEvent {
        fromTokenId: BigNumber;
        spender: string;
        amount: BigNumber;
        _event: Event;
    }
    interface StakesTransferEvent {
        fromTokenId: BigNumber;
        toTokenId: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        tokenId: BigNumber;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
    interface UnequipNFTEvent {
        trollId: BigNumber;
        nft: string;
        nftId: BigNumber;
        _event: Event;
    }
    interface UnstakeEvent {
        who: string;
        tokenId: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
}
