// This example shows how to round a number to the specified number of decimals and returns the result as text with or without commas.

// How to round a number with parameters.

// Use function to round a number with specified decimal points.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.FIXED(1234.9, 1, false));