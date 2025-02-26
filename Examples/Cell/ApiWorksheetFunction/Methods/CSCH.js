// This example shows how to the hyperbolic cosecant of an angle.

// How to return hyperbolic cosecant.

// Use function to get the hyperbolic cosecant of an angle.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CSCH(0.785398));