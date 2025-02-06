// This example shows how to return a bitwise "AND" of two numbers. 
// How to get a two numbers bitwise AND.
// Use function to calculate bitwise AND opertation.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BITAND(13, 25));