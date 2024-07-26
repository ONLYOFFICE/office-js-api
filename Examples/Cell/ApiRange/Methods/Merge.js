// This example merges the selected cell range into a single cell or a cell row.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A3:E8").Merge(true);
oWorksheet.GetRange("A9:E14").Merge(false);
builder.SaveFile("xlsx", "Merge.xlsx");
builder.CloseFile();