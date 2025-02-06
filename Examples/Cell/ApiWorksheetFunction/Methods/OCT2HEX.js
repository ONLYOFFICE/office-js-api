// This example shows how to convert an octal number to hexadecimal.
// How to get a hexadecimal number form an octal.
// Use a function to convert an octal number to hexadecimal.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.OCT2HEX(7777777634, 4));