// This example sets the height of the specified row measured in points.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetRowHeight(0, 30);
builder.SaveFile("xlsx", "SetRowHeight.xlsx");
builder.CloseFile();