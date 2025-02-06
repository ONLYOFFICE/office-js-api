// This example shows how to round a number down, toward zero.
// How to round a number down.
// Use a function to round a number towards zero.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ROUNDDOWN(3.456, 0));