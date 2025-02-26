// This example shows how to return the base-10 logarithm of a number.

// How to get the logarithm to the base 10.

// Use a function to return the logarithm with the base-10.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.LOG10(56));