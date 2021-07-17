export const idlFactory = ({ IDL }) => {
  const AlphaDeck = IDL.Service({
    'amiowner' : IDL.Func([], [], []),
    'claimNFT' : IDL.Func([], [], []),
    'confirmLockForProduction' : IDL.Func([], [IDL.Text], []),
    'getPrincipalNFT' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(IDL.Nat)],
        ['query'],
      ),
    'grantUnownedDeckToPrincipal' : IDL.Func([IDL.Text], [], ['oneway']),
    'lockForProduction' : IDL.Func([], [IDL.Text], []),
    'mintNewDecks' : IDL.Func([IDL.Nat], [], ['oneway']),
    'ping' : IDL.Func([], [IDL.Text], ['query']),
    'serveAllCards' : IDL.Func(
        [],
        [IDL.Vec(IDL.Opt(IDL.Vec(IDL.Nat8)))],
        ['query'],
      ),
    'serveCard' : IDL.Func([IDL.Nat], [IDL.Opt(IDL.Vec(IDL.Nat8))], ['query']),
    'supplyAvailable' : IDL.Func([], [IDL.Nat], ['query']),
    'supplyTotal' : IDL.Func([], [IDL.Nat], ['query']),
    'transferNFT' : IDL.Func([IDL.Principal], [], []),
    'transferownership' : IDL.Func([IDL.Text], [], []),
    'uploadAsset' : IDL.Func([IDL.Nat8, IDL.Vec(IDL.Nat8)], [], ['oneway']),
    'validateAssets' : IDL.Func([], [], ['query']),
  });
  return AlphaDeck;
};
export const init = ({ IDL }) => { return []; };