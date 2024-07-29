// This example shows how to get the subscript property of the specified font.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetSubscript(true);
var bSubscript = oFont.GetSubscript();
oWorksheet.GetRange("B3").SetValue("Subscript property: " + bSubscript);