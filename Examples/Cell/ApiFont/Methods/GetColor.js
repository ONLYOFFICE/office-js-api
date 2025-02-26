// This example shows how to get the font color property of the specified font.

// How to know a font color of the characters.

// Get a color value represented in RGB format and show it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
var oColor = Api.CreateColorFromRGB(255, 111, 61);
oFont.SetColor(oColor);
oColor = oFont.GetColor();
oCharacters = oRange.GetCharacters(16, 6);
oFont = oCharacters.GetFont();
oFont.SetColor(oColor);