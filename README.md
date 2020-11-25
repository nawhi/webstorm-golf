# WebStorm Golf
Inspired by the Masters a few weeks ago, here is a Golf themed way of learning how to master the features of your IDE!

## Instructions
### Prerequisites
Clone the repo and run `yarn install`.

### Gameplay
Your task is to convert the file called `hole` into the one called `target` in the fewest number of "shots" (atomic modifications of the file) that you can. 

The following count as one shot:
- any single key press which causes a change in the file (e.g. deleting or typing a character)
- any keyboard shortcut which causes an atomic change in the file (e.g. Delete Line, Move Line Up, Extract Variable, Rename)

The following moves are considered navigation and do not count as a shot:
- any actions in submenus or dialog boxes, including typing into text boxes such as the Find or Search Everywhere dialogs
- moving the cursor to a different location, highlighting parts of the code or adding multiple cursors  (although as a Hard Mode extension, you may wish to score these actions too!)

Using the mouse incurs a **one-shot penalty** for each click, double-click or click-drag action, _anywhere_ in the IDE (including in submenus or dialog boxes). In other words, each mouse usage counts as two shots.

### Completing a hole
You have completed a hole when the `hole` and `target` files are identical (except whitespace), such that running `diff` between them generates no output and an exit code of zero. There are a few ways of verifying this:
* run `yarn verify` with the name of the hole directory, e.g. `yarn verify hole1`
(note: you will need to install [`fswatch`](https://github.com/emcrisostomo/fswatch)).
* If you like a GUI, you can run a `diff` command in WebStorm's inbuilt shell and use the Smart Commands Execution feature (when the terminal text goes green) to pop up a diff window. You can then even edit the hole file in-place in the diff window if you want, for instant (if noisy) feedback.

## Tips
To complete the course with a good score, you'll need to make use of many of the most powerful features of the IDE, such as [multiple cursors](https://www.jetbrains.com/webstorm/guide/tips/multi-cursor/), [regular expression find and replace](https://www.jetbrains.com/help/webstorm/tutorial-finding-and-replacing-text-using-regular-expressions.html), and the [refactoring tools](https://www.jetbrains.com/help/webstorm/refactoring-source-code.html).

There are no solutions, because there's no right way to do this - and the scoring and par is somewhat arbitrary. Ultimately, it's all about becoming quicker at the kind of text editing that engineers do all day. 

The [WebStorm Keymap Reference](https://resources.jetbrains.com/storage/products/webstorm/docs/WebStorm_ReferenceCard.pdf) may be useful.

If you are working with a partner, you may wish to install [Presentation Assistant](https://plugins.jetbrains.com/plugin/7345-presentation-assistant) to make it easier for them to see what you are doing.


Good luck!

