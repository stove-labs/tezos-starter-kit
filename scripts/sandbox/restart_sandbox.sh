#!/bin/bash

echo "Restarting sandbox..."
./scripts/sandbox/kill_sandbox.sh "$1"
./scripts/sandbox/start_sandbox.sh "$1"