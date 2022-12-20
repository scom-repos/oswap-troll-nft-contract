/// <amd-module name="@scom/oswap-troll-nft-contract/contracts/@openzeppelin/contracts/token/ERC721/ERC721.json.ts" />
declare module "@scom/oswap-troll-nft-contract/contracts/@openzeppelin/contracts/token/ERC721/ERC721.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@scom/oswap-troll-nft-contract/contracts/@openzeppelin/contracts/token/ERC721/ERC721.ts" />
declare module "@scom/oswap-troll-nft-contract/contracts/@openzeppelin/contracts/token/ERC721/ERC721.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
    }
    export interface IApproveParams {
        to: string;
        tokenId: number | BigNumber;
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
    export interface ITransferFromParams {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }
    export class ERC721 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ERC721.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ERC721.ApprovalEvent;
        parseApprovalForAllEvent(receipt: TransactionReceipt): ERC721.ApprovalForAllEvent[];
        decodeApprovalForAllEvent(event: Event): ERC721.ApprovalForAllEvent;
        parseTransferEvent(receipt: TransactionReceipt): ERC721.TransferEvent[];
        decodeTransferEvent(event: Event): ERC721.TransferEvent;
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<void>;
        };
        balanceOf: {
            (owner: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        getApproved: {
            (tokenId: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        isApprovedForAll: {
            (params: IIsApprovedForAllParams, options?: TransactionOptions): Promise<boolean>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        ownerOf: {
            (tokenId: number | BigNumber, options?: TransactionOptions): Promise<string>;
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
        supportsInterface: {
            (interfaceId: string, options?: TransactionOptions): Promise<boolean>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        tokenURI: {
            (tokenId: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module ERC721 {
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
        interface TransferEvent {
            from: string;
            to: string;
            tokenId: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-troll-nft-contract/contracts/Authorization.json.ts" />
declare module "@scom/oswap-troll-nft-contract/contracts/Authorization.json.ts" {
    const _default_1: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@scom/oswap-troll-nft-contract/contracts/Authorization.ts" />
declare module "@scom/oswap-troll-nft-contract/contracts/Authorization.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, Event, TransactionOptions } from "@ijstech/eth-contract";
    export class Authorization extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseAuthorizeEvent(receipt: TransactionReceipt): Authorization.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): Authorization.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): Authorization.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): Authorization.DeauthorizeEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Authorization.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): Authorization.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): Authorization.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): Authorization.TransferOwnershipEvent;
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module Authorization {
        interface AuthorizeEvent {
            user: string;
            _event: Event;
        }
        interface DeauthorizeEvent {
            user: string;
            _event: Event;
        }
        interface StartOwnershipTransferEvent {
            user: string;
            _event: Event;
        }
        interface TransferOwnershipEvent {
            user: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-troll-nft-contract/contracts/TrollNFT.json.ts" />
declare module "@scom/oswap-troll-nft-contract/contracts/TrollNFT.json.ts" {
    const _default_2: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@scom/oswap-troll-nft-contract/contracts/TrollNFT.ts" />
declare module "@scom/oswap-troll-nft-contract/contracts/TrollNFT.ts" {
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
    export class TrollNFT extends _Contract {
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
    export module TrollNFT {
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
}
/// <amd-module name="@scom/oswap-troll-nft-contract/contracts/TrollNFTV2.json.ts" />
declare module "@scom/oswap-troll-nft-contract/contracts/TrollNFTV2.json.ts" {
    const _default_3: {
        abi: ({
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_3;
}
/// <amd-module name="@scom/oswap-troll-nft-contract/contracts/TrollNFTV2.ts" />
declare module "@scom/oswap-troll-nft-contract/contracts/TrollNFTV2.ts" {
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
    export interface ITrollOwnedNFTsParams {
        param1: number | BigNumber;
        param2: string;
    }
    export interface IUnequipNFTParams {
        trollId: number | BigNumber;
        nft: string;
        nftId: number | BigNumber;
    }
    export class TrollNFTV2 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAddStakesEvent(receipt: TransactionReceipt): TrollNFTV2.AddStakesEvent[];
        decodeAddStakesEvent(event: Event): TrollNFTV2.AddStakesEvent;
        parseAddValidNFTEvent(receipt: TransactionReceipt): TrollNFTV2.AddValidNFTEvent[];
        decodeAddValidNFTEvent(event: Event): TrollNFTV2.AddValidNFTEvent;
        parseApprovalEvent(receipt: TransactionReceipt): TrollNFTV2.ApprovalEvent[];
        decodeApprovalEvent(event: Event): TrollNFTV2.ApprovalEvent;
        parseApprovalForAllEvent(receipt: TransactionReceipt): TrollNFTV2.ApprovalForAllEvent[];
        decodeApprovalForAllEvent(event: Event): TrollNFTV2.ApprovalForAllEvent;
        parseApprovedStakerEvent(receipt: TransactionReceipt): TrollNFTV2.ApprovedStakerEvent[];
        decodeApprovedStakerEvent(event: Event): TrollNFTV2.ApprovedStakerEvent;
        parseAttributeEvent(receipt: TransactionReceipt): TrollNFTV2.AttributeEvent[];
        decodeAttributeEvent(event: Event): TrollNFTV2.AttributeEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): TrollNFTV2.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): TrollNFTV2.AuthorizeEvent;
        parseBaseURIEvent(receipt: TransactionReceipt): TrollNFTV2.BaseURIEvent[];
        decodeBaseURIEvent(event: Event): TrollNFTV2.BaseURIEvent;
        parseCapEvent(receipt: TransactionReceipt): TrollNFTV2.CapEvent[];
        decodeCapEvent(event: Event): TrollNFTV2.CapEvent;
        parseCustomAttributeEvent(receipt: TransactionReceipt): TrollNFTV2.CustomAttributeEvent[];
        decodeCustomAttributeEvent(event: Event): TrollNFTV2.CustomAttributeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): TrollNFTV2.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): TrollNFTV2.DeauthorizeEvent;
        parseEquipNFTEvent(receipt: TransactionReceipt): TrollNFTV2.EquipNFTEvent[];
        decodeEquipNFTEvent(event: Event): TrollNFTV2.EquipNFTEvent;
        parseMinimumStakeEvent(receipt: TransactionReceipt): TrollNFTV2.MinimumStakeEvent[];
        decodeMinimumStakeEvent(event: Event): TrollNFTV2.MinimumStakeEvent;
        parseProtocolFeeEvent(receipt: TransactionReceipt): TrollNFTV2.ProtocolFeeEvent[];
        decodeProtocolFeeEvent(event: Event): TrollNFTV2.ProtocolFeeEvent;
        parseStakeEvent(receipt: TransactionReceipt): TrollNFTV2.StakeEvent[];
        decodeStakeEvent(event: Event): TrollNFTV2.StakeEvent;
        parseStakesApprovalEvent(receipt: TransactionReceipt): TrollNFTV2.StakesApprovalEvent[];
        decodeStakesApprovalEvent(event: Event): TrollNFTV2.StakesApprovalEvent;
        parseStakesTransferEvent(receipt: TransactionReceipt): TrollNFTV2.StakesTransferEvent[];
        decodeStakesTransferEvent(event: Event): TrollNFTV2.StakesTransferEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): TrollNFTV2.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): TrollNFTV2.StartOwnershipTransferEvent;
        parseTransferEvent(receipt: TransactionReceipt): TrollNFTV2.TransferEvent[];
        decodeTransferEvent(event: Event): TrollNFTV2.TransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): TrollNFTV2.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): TrollNFTV2.TransferOwnershipEvent;
        parseUnequipNFTEvent(receipt: TransactionReceipt): TrollNFTV2.UnequipNFTEvent[];
        decodeUnequipNFTEvent(event: Event): TrollNFTV2.UnequipNFTEvent;
        parseUnstakeEvent(receipt: TransactionReceipt): TrollNFTV2.UnstakeEvent[];
        decodeUnstakeEvent(event: Event): TrollNFTV2.UnstakeEvent;
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
        private assign;
    }
    export module TrollNFTV2 {
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
}
/// <amd-module name="@scom/oswap-troll-nft-contract/contracts/TrollNFT_VRF.json.ts" />
declare module "@scom/oswap-troll-nft-contract/contracts/TrollNFT_VRF.json.ts" {
    const _default_4: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_4;
}
/// <amd-module name="@scom/oswap-troll-nft-contract/contracts/TrollNFT_VRF.ts" />
declare module "@scom/oswap-troll-nft-contract/contracts/TrollNFT_VRF.ts" {
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
        vrfAddresses: string[];
        vrfParams: string[];
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
    export class TrollNFT_VRF extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): TrollNFT_VRF.ApprovalEvent[];
        decodeApprovalEvent(event: Event): TrollNFT_VRF.ApprovalEvent;
        parseApprovalForAllEvent(receipt: TransactionReceipt): TrollNFT_VRF.ApprovalForAllEvent[];
        decodeApprovalForAllEvent(event: Event): TrollNFT_VRF.ApprovalForAllEvent;
        parseApprovedStakerEvent(receipt: TransactionReceipt): TrollNFT_VRF.ApprovedStakerEvent[];
        decodeApprovedStakerEvent(event: Event): TrollNFT_VRF.ApprovedStakerEvent;
        parseAttributeEvent(receipt: TransactionReceipt): TrollNFT_VRF.AttributeEvent[];
        decodeAttributeEvent(event: Event): TrollNFT_VRF.AttributeEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): TrollNFT_VRF.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): TrollNFT_VRF.AuthorizeEvent;
        parseBaseURIEvent(receipt: TransactionReceipt): TrollNFT_VRF.BaseURIEvent[];
        decodeBaseURIEvent(event: Event): TrollNFT_VRF.BaseURIEvent;
        parseCapEvent(receipt: TransactionReceipt): TrollNFT_VRF.CapEvent[];
        decodeCapEvent(event: Event): TrollNFT_VRF.CapEvent;
        parseCustomAttributeEvent(receipt: TransactionReceipt): TrollNFT_VRF.CustomAttributeEvent[];
        decodeCustomAttributeEvent(event: Event): TrollNFT_VRF.CustomAttributeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): TrollNFT_VRF.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): TrollNFT_VRF.DeauthorizeEvent;
        parseMinimumStakeEvent(receipt: TransactionReceipt): TrollNFT_VRF.MinimumStakeEvent[];
        decodeMinimumStakeEvent(event: Event): TrollNFT_VRF.MinimumStakeEvent;
        parseProtocolFeeEvent(receipt: TransactionReceipt): TrollNFT_VRF.ProtocolFeeEvent[];
        decodeProtocolFeeEvent(event: Event): TrollNFT_VRF.ProtocolFeeEvent;
        parseStakeEvent(receipt: TransactionReceipt): TrollNFT_VRF.StakeEvent[];
        decodeStakeEvent(event: Event): TrollNFT_VRF.StakeEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): TrollNFT_VRF.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): TrollNFT_VRF.StartOwnershipTransferEvent;
        parseTransferEvent(receipt: TransactionReceipt): TrollNFT_VRF.TransferEvent[];
        decodeTransferEvent(event: Event): TrollNFT_VRF.TransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): TrollNFT_VRF.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): TrollNFT_VRF.TransferOwnershipEvent;
        parseUnstakeEvent(receipt: TransactionReceipt): TrollNFT_VRF.UnstakeEvent[];
        decodeUnstakeEvent(event: Event): TrollNFT_VRF.UnstakeEvent;
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
        unstake: {
            (tokenId: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (tokenId: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        withdrawLink: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module TrollNFT_VRF {
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
}
/// <amd-module name="@scom/oswap-troll-nft-contract/contracts/TrollNFT_VRFV2.json.ts" />
declare module "@scom/oswap-troll-nft-contract/contracts/TrollNFT_VRFV2.json.ts" {
    const _default_5: {
        abi: ({
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_5;
}
/// <amd-module name="@scom/oswap-troll-nft-contract/contracts/TrollNFT_VRFV2.ts" />
declare module "@scom/oswap-troll-nft-contract/contracts/TrollNFT_VRFV2.ts" {
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
    export class TrollNFT_VRFV2 extends _Contract {
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
    export module TrollNFT_VRFV2 {
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
}
/// <amd-module name="@scom/oswap-troll-nft-contract/contracts/index.ts" />
declare module "@scom/oswap-troll-nft-contract/contracts/index.ts" {
    export { ERC721 } from "@scom/oswap-troll-nft-contract/contracts/@openzeppelin/contracts/token/ERC721/ERC721.ts";
    export { Authorization } from "@scom/oswap-troll-nft-contract/contracts/Authorization.ts";
    export { TrollNFT } from "@scom/oswap-troll-nft-contract/contracts/TrollNFT.ts";
    export { TrollNFTV2 } from "@scom/oswap-troll-nft-contract/contracts/TrollNFTV2.ts";
    export { TrollNFT_VRF } from "@scom/oswap-troll-nft-contract/contracts/TrollNFT_VRF.ts";
    export { TrollNFT_VRFV2 } from "@scom/oswap-troll-nft-contract/contracts/TrollNFT_VRFV2.ts";
}
/// <amd-module name="@scom/oswap-troll-nft-contract" />
declare module "@scom/oswap-troll-nft-contract" {
    export * as Contracts from "@scom/oswap-troll-nft-contract/contracts/index.ts";
}
