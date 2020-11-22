## Instructions
### Prerequisites
Clone the repo and run `yarn install`.

There are TODO holes on this course. 

Your task is to convert the file called `hole` into the one called `target` in as few keystrokes as possible. 

A keystroke is defined as: TODO

You have completed a hole when the `hole` and `target` files are identical, such that running `diff` between them generates no output and an exit code of zero. There are a few ways of verifying this:
* There is a script available to do this by running `yarn verify` with the name of the hole directory, e.g. `yarn verify hole1`
( note: this uses [`fswatch`](https://github.com/emcrisostomo/fswatch) program,which you will need to install separately).
* If you like a GUI, you can run a `diff` command in WebStorm's inbuilt shell and use the Smart Commands Execution feature (when the terminal text goes green) to pop up a diff window. You can then even edit the hole file in-place in the diff window and get instant (if visually noisy) feedback.

If you are working with a partner, you may wish to install the [Presentation Assistant](https://plugins.jetbrains.com/plugin/7345-presentation-assistant) IDE plugin to make it easier for them to see what you are doing.

Good luck!

