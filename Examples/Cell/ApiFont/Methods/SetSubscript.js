// This example sets the subscript property to the specified font.
// How to change a regular text to a subscript.
// Get a font object of characters and make it subscript.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetSubscript(true);