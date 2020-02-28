#!/bin/bash

echo "Killing sandbox..."
export flextesa_protocol="$1"
docker kill "flextesa-sandbox-$flextesa_protocol"