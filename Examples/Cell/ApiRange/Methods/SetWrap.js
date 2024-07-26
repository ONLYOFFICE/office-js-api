// This example specifies whether the words in the cell must be wrapped to fit the cell size or not.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is the text wrapped to fit the cell size.");
oRange.SetWrap(true);
oWorksheet.GetRange("A3").SetValue("The text in the cell A1 is wrapped: " + oRange.GetWrapText());
builder.SaveFile("xlsx", "SetWrap.xlsx");
builder.CloseFile();