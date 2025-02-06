// This example shows how to convert a hexadecimal number to octal.
// How to get an octal from hexadecimal number.
// Use a function to convert a hexadecimal number to octal.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.HEX2OCT("FFFFFFFF9C"));