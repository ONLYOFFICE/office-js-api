// This example shows how to get the cotangent of a number.

// How to find a cotangent.

// Use function to get the cotangent of an angle.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COT(0.785398));