(* Alias types to new names for better readability *)
type token_owner is address;
type token_balance is nat;
type token_balances is big_map(token_owner, token_balance);

(* Storage type for the tzip-12 tutorial smart contract *)
type storage is token_balances;