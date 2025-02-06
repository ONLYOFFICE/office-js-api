// This example shows how to return the square root of a number.
// How to calculate the square root of a number.
// Use a function to get the square root of a number.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SQRT(100));