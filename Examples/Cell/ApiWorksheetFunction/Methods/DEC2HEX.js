// This example shows how to convert a decimal number to hexadecimal. 
// How to get decimal number from hexadecimal.
// Use function to convert a decimal number to hexadecimal.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DEC2HEX(-100));