#include "get_with_default_nat.ligo"
#include "default_balance.ligo"

function transfer (const transfer_param : transfer_param; var storage : storage) : (list(operation) * storage)
 is begin
    function transfer_iterator (const storage : storage; const transfer : transfer) : storage
        is begin
            (* You're only allowed to transfer your own tokens *)
            if sender =/= transfer.from_ then failwith("Address from_ needs to be equal to the sender") else skip;
            (* Allow transfer only if the sender has a sufficient balance *)
            if get_with_default_nat(storage[transfer.from_], default_balance) < transfer.amount then failwith("Insufficient balance") else skip;
            (* Update the ledger accordingly *)
            storage[transfer.from_] := abs(get_with_default_nat(storage[transfer.from_], default_balance) - transfer.amount);
            storage[transfer.to_] := get_with_default_nat(storage[transfer.to_], default_balance) + transfer.amount;
        end with storage;

    storage := list_fold(transfer_iterator, transfer_param, storage);
 end with ((nil : list(operation)), storage)