// This example freezes the the top row.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
oFreezePanes.FreezeRows(1);
builder.SaveFile("xlsx", "FreezeRows.xlsx");
builder.CloseFile();