// This example shows how to get the superscript property of the specified font.
// How to determine a font superscript property.
// Get a boolean value that represents whether a font has a superscript property or not and show the value in the worksheet.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetSuperscript(true);
var bSuperscript = oFont.GetSuperscript();
oWorksheet.GetRange("B3").SetValue("Superscript property: " + bSuperscript);