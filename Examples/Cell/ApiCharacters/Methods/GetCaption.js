// This example shows how to get a string value that represents the text of the specified range of characters.
// Get a value that represents the label text for the pivot field.
// How to get and display caption of the text.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
var sCaption = oCharacters.GetCaption();
oWorksheet.GetRange("B3").SetValue("Caption: " + sCaption);