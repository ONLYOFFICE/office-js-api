// This example shows how to return the inverse hyperbolic sine of a number.

// How to get an inverse hyperbolic sine.

// Use function to get an inverse hyperbolic sine of a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ASINH(4));