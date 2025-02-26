// This example shows how to return a bitwise "OR" of two numbers. 

// How to get a result from OR operation.

// Use function to calculate bitwise "OR" operation.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BITOR(23, 10));