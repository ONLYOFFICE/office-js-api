// This example shows how to convert a hexadecimal number to decimal.

// How to get a decimal from hexadecimal number.

// Use a function to convert a hexadecimal number to decimal.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.HEX2DEC("FFFFFFFF9C"));