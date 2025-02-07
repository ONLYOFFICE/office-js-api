// This example deletes the ApiCharacters object.
// How to delete characters from an array.
// Remove all characters.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
oCharacters.Delete();