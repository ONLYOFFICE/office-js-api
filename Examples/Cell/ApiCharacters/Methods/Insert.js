// This example inserts a string replacing the specified characters.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
oCharacters.Insert("string");
builder.SaveFile("xlsx", "Insert.xlsx");
builder.CloseFile();