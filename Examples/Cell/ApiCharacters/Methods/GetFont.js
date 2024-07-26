// This example shows how to get the ApiFont object that represents the font of the specified characters.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetBold(true);
builder.SaveFile("xlsx", "GetFont.xlsx");
builder.CloseFile();