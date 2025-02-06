// This example shows how to round a number down to the nearest integer.
// How to round a number down to the nearest integer.
// Use a function to round down a number.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.INT(2.3));