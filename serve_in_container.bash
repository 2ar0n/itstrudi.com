#!/bin/bash

if [[ $(command -v podman) ]]; then
    COMMAND="sudo podman"
elif [[ $(command -v docker) ]]; then
    COMMAND="docker"
fi

$COMMAND run -it --rm -v /home/aaron/projects/itstrudi.com:/usr/src/app -p 4000:4000 starefossen/github-pages
