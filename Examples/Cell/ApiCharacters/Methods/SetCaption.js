// This example sets a string value that represents the text of the specified range of characters.

// How to add a label for the specified characters.

// Set a caption for the characters collection.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
oCharacters.SetCaption("string");