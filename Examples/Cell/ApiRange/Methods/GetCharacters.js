// This example shows how to get the ApiCharacters object that represents a range of characters within the object text.

// How to get range characters.

// Get the range characters, get their font object and set it to bold.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetBold(true);