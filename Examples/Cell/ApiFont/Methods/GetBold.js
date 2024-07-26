// This example shows how to get the bold property of the specified font.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetBold(true);
var bBold = oFont.GetBold();
oWorksheet.GetRange("B3").SetValue("Bold property: " + bBold);
builder.SaveFile("xlsx", "GetBold.xlsx");
builder.CloseFile();