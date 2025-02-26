// This example shows how to return the tangent of an angle.

// How to return a tangent of an angle.

// Use a function to calculate angle's tangent.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TAN(0.5));