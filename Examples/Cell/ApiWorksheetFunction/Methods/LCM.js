// This example shows how to return the least common multiple.

// How to find the least common multiple from the list of numbers.

// Use a function to find out the least common multiple.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.LCM(4, 6, 8, 8, 12, 24, 2, 1));