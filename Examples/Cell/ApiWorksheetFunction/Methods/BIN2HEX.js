// This example shows how to convert a binary number to hexadecimal.

// How to get a hexadecimal representation of a binary number.

// Use function to convert a binary to hexadecimal.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BIN2HEX(1110011100, 4));