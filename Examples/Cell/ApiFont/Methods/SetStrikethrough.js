// This example sets the strikethrough property to the specified font.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetStrikethrough(true);
builder.SaveFile("xlsx", "SetStrikethrough.xlsx");
builder.CloseFile();