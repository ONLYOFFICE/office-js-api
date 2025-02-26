// This example shows how to return the tangent of a complex numbers.

// How to get a tangent of a complex numbers.

// Use a function to get the tangent.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMTAN("-2+2.5i"));