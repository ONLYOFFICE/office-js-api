// This example shows how to convert a text string to proper case: the first letter in each word to uppercase, and all other letters to lowercase.
// How to make each word's first letter uppercase.
// Use a function to make proper casing for all text strings.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PROPER("dAVID CONNOR"));