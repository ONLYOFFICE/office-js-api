// This example shows how to get the hyperbolic cotangent of a number.
// How to find a hyperbolic cotangent.
// Use function to get the hyperbolic cotangent of an angle.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COTH(0.785398));