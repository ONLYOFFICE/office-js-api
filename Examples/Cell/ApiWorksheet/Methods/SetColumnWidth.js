// This example sets the width of the specified column.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetColumnWidth(0, 10);
oWorksheet.SetColumnWidth(1, 20);
builder.SaveFile("xlsx", "SetColumnWidth.xlsx");
builder.CloseFile();