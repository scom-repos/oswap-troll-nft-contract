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
}
export interface IApproveParams {
    to: string;
    tokenId: number | BigNumber;
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
export interface ITokenOfOwnerByIndexParams {
    owner: string;
    index: number | BigNumber;
}
export interface ITransferFromParams {
    from: string;
    to: string;
    tokenId: number | BigNumber;
}
export declare class TrollNFT extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): TrollNFT.ApprovalEvent[];
    decodeApprovalEvent(event: Event): TrollNFT.ApprovalEvent;
    parseApprovalForAllEvent(receipt: TransactionReceipt): TrollNFT.ApprovalForAllEvent[];
    decodeApprovalForAllEvent(event: Event): TrollNFT.ApprovalForAllEvent;
    parseApprovedStakerEvent(receipt: TransactionReceipt): TrollNFT.ApprovedStakerEvent[];
    decodeApprovedStakerEvent(event: Event): TrollNFT.ApprovedStakerEvent;
    parseAttributeEvent(receipt: TransactionReceipt): TrollNFT.AttributeEvent[];
    decodeAttributeEvent(event: Event): TrollNFT.AttributeEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): TrollNFT.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): TrollNFT.AuthorizeEvent;
    parseBaseURIEvent(receipt: TransactionReceipt): TrollNFT.BaseURIEvent[];
    decodeBaseURIEvent(event: Event): TrollNFT.BaseURIEvent;
    parseCapEvent(receipt: TransactionReceipt): TrollNFT.CapEvent[];
    decodeCapEvent(event: Event): TrollNFT.CapEvent;
    parseCustomAttributeEvent(receipt: TransactionReceipt): TrollNFT.CustomAttributeEvent[];
    decodeCustomAttributeEvent(event: Event): TrollNFT.CustomAttributeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): TrollNFT.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): TrollNFT.DeauthorizeEvent;
    parseMinimumStakeEvent(receipt: TransactionReceipt): TrollNFT.MinimumStakeEvent[];
    decodeMinimumStakeEvent(event: Event): TrollNFT.MinimumStakeEvent;
    parseProtocolFeeEvent(receipt: TransactionReceipt): TrollNFT.ProtocolFeeEvent[];
    decodeProtocolFeeEvent(event: Event): TrollNFT.ProtocolFeeEvent;
    parseStakeEvent(receipt: TransactionReceipt): TrollNFT.StakeEvent[];
    decodeStakeEvent(event: Event): TrollNFT.StakeEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): TrollNFT.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): TrollNFT.StartOwnershipTransferEvent;
    parseTransferEvent(receipt: TransactionReceipt): TrollNFT.TransferEvent[];
    decodeTransferEvent(event: Event): TrollNFT.TransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): TrollNFT.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): TrollNFT.TransferOwnershipEvent;
    parseUnstakeEvent(receipt: TransactionReceipt): TrollNFT.UnstakeEvent[];
    decodeUnstakeEvent(event: Event): TrollNFT.UnstakeEvent;
    _attributes: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    _customAttributes: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
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
    creationTime: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
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
    unstake: {
        (tokenId: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (tokenId: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module TrollNFT {
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
    interface UnstakeEvent {
        who: string;
        tokenId: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
}
