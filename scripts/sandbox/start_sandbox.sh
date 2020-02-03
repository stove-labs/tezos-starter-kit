#!/bin/bash

echo "Starting sandbox..."
docker run --rm --name flextesa-sandbox --detach -p 8732:20000 stovelabs/image-babylonbox-run-archive:latest babylonbox-archive start