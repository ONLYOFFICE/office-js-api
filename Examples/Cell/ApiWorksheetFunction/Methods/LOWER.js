// This example shows how to convert all letters in a text string to lowercase.
// How to make all characters uncapitalized.
// Use a function to make a text string to lowercase.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.LOWER("Day"));