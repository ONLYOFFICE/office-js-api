// This example shows how to return the secant of an angle.

// How to get angle's secant.

// Use a function to calculate the secant of an angle.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SEC(0.785398));