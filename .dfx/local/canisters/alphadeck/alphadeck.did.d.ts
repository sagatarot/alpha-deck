import type { Principal } from '@dfinity/principal';
export interface AlphaDeck {
  'amiowner' : () => Promise<undefined>,
  'claimNFT' : () => Promise<undefined>,
  'confirmLockForProduction' : () => Promise<string>,
  'getPrincipalNFT' : (arg_0: Principal) => Promise<[] | [bigint]>,
  'grantUnownedDeckToPrincipal' : (arg_0: string) => Promise<undefined>,
  'lockForProduction' : () => Promise<string>,
  'mintNewDecks' : (arg_0: bigint) => Promise<undefined>,
  'ping' : () => Promise<string>,
  'serveAllCards' : () => Promise<Array<[] | [Array<number>]>>,
  'serveCard' : (arg_0: bigint) => Promise<[] | [Array<number>]>,
  'supplyAvailable' : () => Promise<bigint>,
  'supplyTotal' : () => Promise<bigint>,
  'transferNFT' : (arg_0: Principal) => Promise<undefined>,
  'transferownership' : (arg_0: string) => Promise<undefined>,
  'uploadAsset' : (arg_0: number, arg_1: Array<number>) => Promise<undefined>,
  'validateAssets' : () => Promise<undefined>,
}
export interface _SERVICE extends AlphaDeck {}