// This example shows how to round a positive number up and negative number down to the nearest odd integer.
// How to round a number the nearest odd integer.
// Use a function round a negative/positive number the nearest odd integer.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ODD(7.675));