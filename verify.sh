set -o pipefail

HOLE=$1

HOLE_FILES=("$HOLE"/hole.* "$HOLE"/target.*)

function check() {
  diff -u "$HOLE"/hole.* "$HOLE"/target.* \
    | yarn --silent diff-so-fancy \
    | tail -n +5 \
    && echo "Hole complete!" && exit 0 \
    || echo "Try again..."
}
export -f check

check

# shellcheck disable=SC2086
fswatch -0 ${HOLE_FILES[*]} \
  | xargs -0 -n1 -I {} bash -c 'check'

