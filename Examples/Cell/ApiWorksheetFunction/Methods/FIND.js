// This example shows how to return the starting position of one text string within another text string. This function is case-sensitive.
// How to get an index of a substring from a string.
// Use function to find out a starting position of a substring containing in another text.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.FIND("line", "Online Office"));