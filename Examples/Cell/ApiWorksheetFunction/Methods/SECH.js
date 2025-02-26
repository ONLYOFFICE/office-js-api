// This example shows how to return the hyperbolic secant of an angle.

// How to get angle's hyperbolic secant.

// Use a function to calculate the hyperbolic secant of an angle.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SECH(0.785398));