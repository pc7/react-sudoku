

Rewrite 2014 Sudoku portfolio application using React
-----------------------------------------------------

[done] Create empty Redux store.

[done] Create reducer to initialise the grid structure as a two-dimensional array of objects as a single property in the Redux store, with placeholder actualValues. Grid needs to be part of application state to avoid unnecessary and extensive re-rendering on grid initialisation with backtracking algorithm.

[done] Create action creator function to invoke the grid initialisation reducer, action creator is invoked on page load.

[done] Create HTML table cells with placeholder content prop numbers obtained from Redux store.

[done] Create unit tests and exportable object type definitions.

[done] Adapt original sudoku application code to generate a complete grid array to be stored in the store.

[done] Implement a backtracking algorithm within the action creator to generate actualValues, instead of using placeholder numbers. The necessary impure randomisation means that this must be performed in an action creator, not the reducer.

[done] Move comments from original 2014 application where needed.

[done] Randomly designate grid cells as hidden when grid is generated. Hidden cells have a 'userValue' property to hold the number that the user selects for the cell, and do not have their actualValue displayed in the user interface.

[done] Create 'new game' button to invoke grid initialisation action creator function on click.

[done] Ability for user to select a 1-9 userValue for hidden cells using a 'select' element. This is dispatched to the store on a 'select' element's 'change' event, using an action creator within the 'select' component. A new reducer is also needed.

[done] Each cell component has a Set of selectable numbers in its props. These are assigned using processing within mapStateToProps(), in which the store's grid is processed to create a single Set prop. This ensures that selectable numbers are obtained from the restricted set specified in the props so that users cannot violate grid number integrity. Selectable numbers potentially don't include the cell's actualValue, if the user has made errors in their number selection.

[done] 'option' elements within a 'select' element are generated from the selectableNumbers prop, allowing the user to select a userValue for the cell from the restricted set of numbers.

[done] Every time a 'userValue' in the store is updated, a listener is invoked to update the possibleUserValues of other cells, and also check whether the userValue is correct, and if so check for a win.

[done] The number of hidden cells when a new grid is created is obtained from a value specified by a slider 'input' element.

[done] Create a button to reset all incorrect userValues in the store's grid. A new action type and reducer are required. The behaviour is pure and can be performed within the reducer.

