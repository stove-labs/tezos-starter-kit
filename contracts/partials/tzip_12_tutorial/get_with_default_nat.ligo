function get_with_default_nat(const option : option(nat); const default : nat) : nat 
    is case option of 
        | Some(value) -> value
        | None -> default
    end