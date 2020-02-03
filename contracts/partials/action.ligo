#include "transfer_param.ligo"

type action is
(* Our simplified implementation only supports the Transfer entrypoint *)
| Transfer of transfer_param

(* This is just a placeholder *)
| U