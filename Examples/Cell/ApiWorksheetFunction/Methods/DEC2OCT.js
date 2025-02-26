// This example shows how to convert a decimal number to octal. 

// How to get decimal number from octal.

// Use function to convert a decimal number to octal.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DEC2OCT(-100));