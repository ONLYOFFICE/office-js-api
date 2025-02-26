// This example shows how to return the hyperbolic tangent of a number.

// How to return the hyperbolic tangent of a number.

// Use a function to calculate angle's hyperbolic tangent.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TANH(6));