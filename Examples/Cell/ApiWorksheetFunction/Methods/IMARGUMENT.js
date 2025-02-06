// This example shows how to return the argument Theta, an angle expressed in radians.
// How to get an angle expressed in radians.
// Use a function to get an angle expressed in radians.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMARGUMENT("-2+2.5i"));