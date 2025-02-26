// This example shows how to convert an octal number to binary.

// How to get a binary number form an octal.

// Use a function to convert an octal number to binary.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.OCT2BIN(7777777634));