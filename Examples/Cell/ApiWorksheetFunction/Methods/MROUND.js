// This example shows how to return a number rounded to the desired multiple.

// How to round the number.

// Use a function to round the number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.MROUND(14.35, 0.4));