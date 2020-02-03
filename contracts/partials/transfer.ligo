#include "get_with_default_nat.ligo"

function transfer (const transfer_param : transfer_param; var storage : storage) : (list(operation) * storage)
 is begin
    function transfer_iterator (const transfer : transfer) : unit
        is begin
            (* You're only allowed to transfer your own tokens *)
            if sender =/= transfer.from_ then failwith("Address from_ needs to be equal to the sender") else skip;
            (* Update the ledger accordingly *)
            storage[transfer.from_] := abs(get_with_default_nat(storage[transfer.from_], 0n) - transfer.amount);
            storage[transfer.to_] := get_with_default_nat(storage[transfer.to_], 0n) + transfer.amount;
        end with Unit;

    list_iter(transfer_iterator, transfer_param);
 end with ((nil : list(operation)), storage)