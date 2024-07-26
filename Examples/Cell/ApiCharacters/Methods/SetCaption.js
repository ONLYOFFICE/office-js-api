// This example sets a string value that represents the text of the specified range of characters.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
oCharacters.SetCaption("string");
builder.SaveFile("xlsx", "SetCaption.xlsx");
builder.CloseFile();