// This example shows how to convert a hexadecimal number to binary.

// How to get a binary from hexadecimal number.

// Use a function to convert a hexadecimal number to binary.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.HEX2BIN("FFFFFFFF9C"));