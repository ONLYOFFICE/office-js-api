// This example sets the text for the specified characters.

// Update characters collection by setting a new text.

// Set text for the characters of the range.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
oCharacters.SetText("string");