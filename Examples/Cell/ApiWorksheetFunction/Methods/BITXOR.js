// This example shows how to return a bitwise "XOR" of two numbers. 

// How to get a result from XOR operation.

// Use function to calculate bitwise "XOR" operation.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BITXOR(5, 3));