#!/bin/bash

function check() {
  set -o pipefail
  clear
  diff -u $1 $2 |
    yarn --silent diff-so-fancy |
    tail -n +5 && echo 'Hole complete!' || echo 'Try again...'
}

export -f check

HOLE=$1/hole.*
TARGET=$1/target.*

check $HOLE $TARGET

# shellcheck disable=SC2086
fswatch -0o $HOLE $TARGET |
  xargs -0 -n1 -I {} bash -c "check $HOLE $TARGET"
