# The Alpha Tarot Deck Canister

Any canister that follows this specification can be considered an Alpha Tarot Deck Canister. In order to be considered an Alpha Tarot Deck Canister, a canister must follow this specification.

- The canister must serve an image asset for each index in a deck of Tarot cards.
    - Must provide standard method to return an image asset given a specific index.
    - Must provide standard method to return all image assets.
- The canister must serve its assets to any application or individual without discrimination, except:
    - An NFT owner should have a public/private switch they can use restrict public access of their property.
- The canister must provide a limited inventory of NFTs to own.
- The canister must allow a principal to maintain ownership of an NFT.
- The canister must allow a principal to transfer ownership of an NFT that they own.
- The canister should use Internet Identity for IAM.
- The canister principal should be able to control scarcity of the NFTs by minting new decks.
- The canister principal should be able to arbitrarily assign ownership of an un-owned NFT.
- No one, not even the canister principal can be able to affect the ownership properties of an owned NFT that does not belong to them.
- Anyone should be able to acquire an NFT, given:
    - They have an II principal.
    - There is available inventory.
    - They don't already own an NFT on the canister. This is to prevent individuals from absorbing too much of the alpha inventory. This is definitely something to iron out later.
