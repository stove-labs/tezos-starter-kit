#!/bin/bash

echo "Starting sandbox..."
export flextesa_protocol="$1"
docker run --rm --name "flextesa-sandbox-$flextesa_protocol" --detach -p 8732:20000 "stovelabs/image-""$flextesa_protocol""box-run-archive:latest" sandbox-archive start
node ./scripts/sandbox/waitForNetwork.js