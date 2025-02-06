// This example sets the bold property to the specified font.
// How to make a text bold.
// Get a font object of characters and make it bold.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetBold(true);