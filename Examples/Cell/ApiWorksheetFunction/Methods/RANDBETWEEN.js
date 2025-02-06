// This example shows how to return a random number between the numbers specified.
// How to get a number between indicated values.
// Use a function to return a random value between specified limits.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.RANDBETWEEN(-1, 10));