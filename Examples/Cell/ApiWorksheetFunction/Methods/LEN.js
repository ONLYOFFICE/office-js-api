// This example shows how to return the number of characters in a text string.

// How to get a length of a text.

// Use a function to get length of a string.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.LEN("Online Office"));