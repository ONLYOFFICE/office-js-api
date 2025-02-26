// This example sets the superscript property to the specified font.

// How to change a regular text to a superscript.

// Get a font object of characters and make it superscript.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetSuperscript(true);