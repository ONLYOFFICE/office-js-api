// This example shows how to get the font size property of the specified font.
// How to determine a font size of characters.
// Get the size of a font and display it in the worksheet.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetSize(18);
var nSize = oFont.GetSize();
oWorksheet.GetRange("B3").SetValue("Size property: " + nSize);