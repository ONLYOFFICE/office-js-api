// This example shows how to convert an octal number to decimal.

// How to get a decimal number from an octal.

// Use a function to convert an octal to a decimal number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.OCT2DEC(7777777634));