// This example shows how to convert a decimal number to binary. 
// How to get decimal number from binary.
// Use function to convert a decimal number to binary.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DEC2BIN(-100));