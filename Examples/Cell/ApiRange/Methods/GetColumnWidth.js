// This example shows how to get the column width value.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var sWidth = oWorksheet.GetRange("A1").GetColumnWidth();
oWorksheet.GetRange("A1").SetValue("Width: ");
oWorksheet.GetRange("B1").SetValue(sWidth);
builder.SaveFile("xlsx", "GetColumnWidth.xlsx");
builder.CloseFile();