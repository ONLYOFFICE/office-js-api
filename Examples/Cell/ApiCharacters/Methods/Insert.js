// This example inserts a string replacing the specified characters.
// How to replace characters with a different string value.
// Change the characters to another string value.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
oCharacters.Insert("string");