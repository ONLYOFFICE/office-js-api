// This example cuts a range to the clipboard.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is a sample text which is move to the range A3.");
oRange.Cut(oWorksheet.GetRange("A3"));
builder.SaveFile("xlsx", "Cut.xlsx");
builder.CloseFile();