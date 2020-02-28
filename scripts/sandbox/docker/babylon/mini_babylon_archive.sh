#! /bin/sh

all_commands="
* usage | help | --help | -h: Display this help message."
usage () {
    cat >&2 <<EOF
This script provides a Flextesa “mini-net” sandbox with predefined
parameters useful for tutorials and basic exploration with
wallet software like \`tezos-client\`.

usage: $0 <command>

where <command> may be:
$all_commands
EOF
}

export alice="$(flextesa key alice)"
export bob="$(flextesa key bob)"

export flextesa_node_cors_origin="*"

all_commands="$all_commands
* start : Start the sandbox."
start () {
    flextesa mini-net \
             --root /tmp/mini-babylon --size 1 "$@" \
             --number-of-b 1 \
             --time-b 10 \
             --add-bootstrap-account="$alice@2_000_000_000_000" \
             --add-bootstrap-account="$bob@2_000_000_000_000" \
             --no-daemons-for=alice \
             --no-daemons-for=bob \
             --until-level 2_000_000 \
             --tezos-baker tezos-baker-005-PsBabyM1 \
             --tezos-endor tezos-endorser-005-PsBabyM1 \
             --tezos-accus tezos-accuser-005-PsBabyM1 \
             --protocol-hash PsBabyM1eUXZseaJdmXFApDSBqj8YBfwELoxZHHW77EMcAbbwAS \
             --set-history-mode N000:archive
}

all_commands="$all_commands
* info : Show accounts and information about the sandbox."
info () {
    cat >&2 <<EOF
Usable accounts:

- $(echo $alice | sed 's/,/\n  * /g')
- $(echo $bob | sed 's/,/\n  * /g')
EOF
}


if [ "$1" = "" ] || [ "$1" = "help" ] || [ "$1" = "--help" ] || [ "$1" = "-h" ] ; then
    usage
else
    "$@"
fi
