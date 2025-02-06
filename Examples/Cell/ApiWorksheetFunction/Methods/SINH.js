// This example shows how to return the hyperbolic sine of a number.
// How to calaculate the hyperbolic sine of a number.
// Use a function to get a hyperbolic sine of a number.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SINH(4));