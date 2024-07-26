// This example shows how to get the row height value.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var nHeight = oWorksheet.GetRange("A1").GetRowHeight();
oWorksheet.GetRange("A1").SetValue("Height: ");
oWorksheet.GetRange("B1").SetValue(nHeight);
builder.SaveFile("xlsx", "GetRowHeight.xlsx");
builder.CloseFile();