// This example shows how to return the inverse hyperbolic tangent.

// How to get return the inverse hyperbolic tangent.

// Use function to get an inverse hyperbolic tangent.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ATANH(0.5));