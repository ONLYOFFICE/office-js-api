// This example shows how to convert a binary number to octal.

// How to get a octal representation of a binary number.

// Use function to convert a binary to octal.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BIN2OCT(1110011100, 4));