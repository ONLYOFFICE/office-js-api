// This example shows how to get the text of the specified range of characters.

// How to get a raw text from the characters.

// Retrieve a text from the character collection.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
var sText = oCharacters.GetText();
oWorksheet.GetRange("B3").SetValue("Text: " + sText);