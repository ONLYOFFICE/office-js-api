// This example shows how to convert a text string to all uppercase letters.
// How to make a string characters uppercase.
// Use a function to convert all letters to uppercase.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.UPPER("Online Office"));