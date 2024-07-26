// This example sets the width of all the columns in the range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetColumnWidth(20);
builder.SaveFile("xlsx", "SetColumnWidth.xlsx");
builder.CloseFile();