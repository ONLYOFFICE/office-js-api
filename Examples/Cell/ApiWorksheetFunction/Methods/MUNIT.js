// This example shows how to return the unit matrix for the specified dimension.

// How to get a unit matrix.

// Use a function to get a unit matrix specifying dimension.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.MUNIT(3));