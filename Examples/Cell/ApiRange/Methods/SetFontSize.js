// This example sets the font size to the characters of the cell range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:D5");
oRange.SetFontSize(20);
builder.SaveFile("xlsx", "SetFontSize.xlsx");
builder.CloseFile();