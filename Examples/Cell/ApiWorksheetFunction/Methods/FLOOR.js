// This example shows how to round a number down to the nearest multiple of significance.

// How to round a number down to the nearest multiple of significance.

// Use function to round down.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.FLOOR(5.786, 0.7));