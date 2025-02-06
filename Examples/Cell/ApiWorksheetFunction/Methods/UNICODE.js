// This example shows how to return the number (code point) corresponding to the first character of the text.
// How to get a Unicode of a character.
// Use a function to return the character's Unicode.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.UNICODE("example"));