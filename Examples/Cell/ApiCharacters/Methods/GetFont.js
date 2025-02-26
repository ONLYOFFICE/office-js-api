// This example shows how to get the ApiFont object that represents the font of the specified characters.

// How to get font style of the array of characters.

// Use font of the specified characters to set their style.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetBold(true);