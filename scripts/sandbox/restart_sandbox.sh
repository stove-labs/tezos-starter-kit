export flextesa_protocol="$1"
./scripts/sandbox/kill_sandbox.sh "$flextesa_protocol"
./scripts/sandbox/start_sandbox.sh "$flextesa_protocol"