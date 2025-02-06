// This example shows how to get the parent ApiCharacters object of the specified font.
// How to determine a font object's parent.
// Get a parent of a font and add text to it.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
var oFont = oCharacters.GetFont();
var oParent = oFont.GetParent();
oParent.SetText("string");