#include "../partials/action.ligo"
#include "../partials/storage.ligo"
#include "../partials/transfer.ligo"

(* Default function that represents our contract, it's sole purpose here is the entrypoint routing *)
function main (const action : action; var storage : storage) : (list(operation) * storage)
    is (case action of
    (* 
        Unwrap the `Transfer(...)` parameters and invoke the transfer function.
        The return value of `transfer(...)` is then returned as a result of `main(...)` as well.
     *)
    | Transfer(transfer_param) -> transfer(transfer_param, storage)
    
    (* This is just a placeholder *)
    | U -> ((nil : list(operation)), storage)
    end)