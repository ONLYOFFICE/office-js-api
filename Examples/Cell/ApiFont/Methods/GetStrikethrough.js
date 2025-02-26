// This example shows how to get the strikethrough property of the specified font.

// How to determine a font strikethrough property.

// Get a boolean value that represents whether a font is strikethrough or not and show the value in the worksheet.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetStrikethrough(true);
var bStrikethrough = oFont.GetStrikethrough();
oWorksheet.GetRange("B3").SetValue("Strikethrough property: " + bStrikethrough);