// This example shows how to get the italic property of the specified font.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetItalic(true);
var bItalic = oFont.GetItalic();
oWorksheet.GetRange("B3").SetValue("Italic property: " + bItalic);
builder.SaveFile("xlsx", "GetItalic.xlsx");
builder.CloseFile();