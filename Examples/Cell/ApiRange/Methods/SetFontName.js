// This example sets the specified font family as the font name for the cell range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:D5");
oRange.SetFontName("Arial");
builder.SaveFile("xlsx", "SetFontName.xlsx");
builder.CloseFile();