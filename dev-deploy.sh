
# NOTE: This script is for usage only during development.

# TODO: Finish this script. Currently guest kernel SSH server available through port redirection at local port number 2222.

cd /home/p/Documents/tests/sudoku

# Note: This command is an alternative to checking the Flow server output on every Webpack build.
$(npm bin)/flow || exit

npm test && scp -P 2222 -r /home/p/Documents/tests/sudoku/public/bundle.js z@localhost:~/sudoku/public/bundle.js