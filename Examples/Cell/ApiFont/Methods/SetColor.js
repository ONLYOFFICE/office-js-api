// This example sets the font color property to the specified font.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
var oColor = Api.CreateColorFromRGB(255, 111, 61);
oFont.SetColor(oColor);
builder.SaveFile("xlsx", "SetColor.xlsx");
builder.CloseFile();