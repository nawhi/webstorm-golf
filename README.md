# WebStorm Golf
Inspired by the Masters a few weeks ago, here is a Golf themed way of learning how to master the features of your IDE!

## Instructions
### Prerequisites
Clone the repo and run `yarn install`.

Your task is to convert the file called `hole` into the one called `target` in the fewest number of "shots" (atomic modifications of the file) that you can. 

The following all count as one shot:
- any single key press (e.g. delete or type a character)
- any keyboard shortcut (e.g. Cmd+Backspace to delete a word)

Using the mouse incurs a penalty shot.

The following do not count as a shot:
- navigating in submenus or dialog boxes (unless you use the mouse)
- moving the cursor to a different location
- highlighting parts of the code or adding multiple cursors

You have completed a hole when the `hole` and `target` files are identical (except whitespace), such that running `diff` between them generates no output and an exit code of zero. There are a few ways of verifying this:
* run `yarn verify` with the name of the hole directory, e.g. `yarn verify hole1`
(note: you will need to install [`fswatch`](https://github.com/emcrisostomo/fswatch)).
* If you like a GUI, you can run a `diff` command in WebStorm's inbuilt shell and use the Smart Commands Execution feature (when the terminal text goes green) to pop up a diff window. You can then even edit the hole file in-place in the diff window if you want, for instant (if noisy) feedback.

If you are working with a partner, you may wish to install the [Presentation Assistant](https://plugins.jetbrains.com/plugin/7345-presentation-assistant) IDE plugin to make it easier for them to see what you are doing.

Good luck!

