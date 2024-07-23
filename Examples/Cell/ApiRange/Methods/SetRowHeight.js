// This example sets the row height value.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetRowHeight(32);
builder.SaveFile("xlsx", "SetRowHeight.xlsx");
builder.CloseFile();