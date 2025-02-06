// This example shows how to return the sine of an angle.
// How to calaculate the sine of a number.
// Use a function to get a sine of a number.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SIN(0.5));