// This example freezes the the first column.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
oFreezePanes.FreezeColumns(1);
builder.SaveFile("xlsx", "FreezeColumns.xlsx");
builder.CloseFile();