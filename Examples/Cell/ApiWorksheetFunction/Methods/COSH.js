// This example shows how to get the hyperbolic cosine of a number.
// How to find a hyperbolic cosine.
// Use function to get the hyperbolic cosine of an angle.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COSH(3));