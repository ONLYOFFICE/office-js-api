// This example shows how to convert a binary number to decimal.

// How to get a decimal representation of a binary number.

// Use function to convert a binary to decimal.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BIN2DEC(1110011100));