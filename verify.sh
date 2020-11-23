set -o pipefail

HOLE=$1/hole.*
TARGET=$1/target.*


diff -u $HOLE $TARGET | yarn --silent diff-so-fancy | tail -n +5 && echo 'Hole complete!' || echo 'Try again...'

# shellcheck disable=SC2086
fswatch -0o $HOLE $TARGET |
  xargs -0 -n1 -I {} bash -c -o pipefail "diff -u $HOLE $TARGET | yarn --silent diff-so-fancy | tail -n +5 && echo 'Hole complete!' || echo 'Try again...'"
