// This example shows how to get the parent ApiCharacters object of the specified font.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
var oFont = oCharacters.GetFont();
var oParent = oFont.GetParent();
oParent.SetText("string");
builder.SaveFile("xlsx", "GetParent.xlsx");
builder.CloseFile();