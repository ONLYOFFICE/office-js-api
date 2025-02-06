// This example sets an underline of the type specified in the request to the font.
// How to change a regular text to an underlined one.
// Get a font object of characters and make it underlined.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetUnderline("xlUnderlineStyleSingle");