// This example shows how to return the characters from the middle of a text string, given a starting position and length.

// How to get characters from the middle of the string indicating an index and length.

// Use a function to get an array of characters from the middle of a string.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.MID("Online Office", 3, 4));