## Instructions
### Prerequisites
Clone the repo and run `yarn install`.

There are TODO holes on this course. 

Your task is to convert the file called `hole` into the one called `target` in the fewest number of "shots" (interactions with the IDE) that you can. 

When starting the hole, you can put your cursor anywhere in the file. From then on, the following rules are used to calculate your score:
- any key press (e.g. a letter or punctuation) is 1 point 
- any keyboard shortcut (e.g. Alt+Enter) is 1 point
- navigating in submenus or dialog boxes does not incur any points 
- any mouse click is 5 points

For example: 
- selecting an action from the intentions menu: 1 point
- navigating with the arrow keys: 1 point per key press
- performing an automated refactor such as Extract Parameter: 1 point (unless you use your mouse inside the refactor dialog: then it's 6 points)
- typing the word "private": 7 points (!)
- using the mouse to highlight an area of text: 5 points


You have completed a hole when the `hole` and `target` files are identical, such that running `diff` between them generates no output and an exit code of zero. There are a few ways of verifying this:
* There is a script available to do this by running `yarn verify` with the name of the hole directory, e.g. `yarn verify hole1`
( note: this uses [`fswatch`](https://github.com/emcrisostomo/fswatch) program,which you will need to install separately).
* If you like a GUI, you can run a `diff` command in WebStorm's inbuilt shell and use the Smart Commands Execution feature (when the terminal text goes green) to pop up a diff window. You can then even edit the hole file in-place in the diff window if you want, for instant (if noisy) feedback.

If you are working with a partner, you may wish to install the [Presentation Assistant](https://plugins.jetbrains.com/plugin/7345-presentation-assistant) IDE plugin to make it easier for them to see what you are doing.

Good luck!

