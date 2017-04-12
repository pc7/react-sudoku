
About
-----

Basic demonstration application using component-based development with React, application state management with Redux, type assertions with Flow, and modular CSS with PostCSS.

Total development time was approximately 28 hours.


Game Instructions
-----------------

A new grid of numbers is generated at the start of every game.

Move the slider below the buttons to control how many squares in the next new game will have their numbers hidden.

A number can be selected in an empty square by hovering the square, and selecting a number from the drop-down menu that appears. Numbers can be removed from these squares by selecting the 'none' value in the drop-down menu.

Only numbers that are not present (either as revealed squares or as user-selected squares) in the same row, column or 3x3 square, can be selected for an empty square.

As a result, if a wrong number is selected by the user, this will prevent the number being available to be put in its correct square.

All wrong numbers entered by the user are removed when the 'remove incorrect entries' button is clicked. Only the correct numbers entered by the user will remain.

The game is won when all empty squares are filled with their correct numbers. The background of the empty squares will change colour when the game is won.