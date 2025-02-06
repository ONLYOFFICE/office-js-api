// This example shows how to return the result of a number raised to a power.
// How to raise a number to a power.
// Use a function to calculate the result after raising a number to the power.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.POWER(23, 4));