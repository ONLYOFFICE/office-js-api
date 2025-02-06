// This example shows how to convert a text string that represents a number to a number.
// How to get number from a text.
// Use a function to return a number from a string.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.VALUE("$3.50"));