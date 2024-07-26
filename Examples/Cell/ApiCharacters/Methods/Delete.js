// This example deletes the ApiCharacters object.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
oCharacters.Delete();
builder.SaveFile("xlsx", "Delete.xlsx");
builder.CloseFile();