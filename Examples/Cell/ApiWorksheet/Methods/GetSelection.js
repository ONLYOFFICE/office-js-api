// This example shows how to get an object that represents the selected range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetSelection().SetValue("selected");
builder.SaveFile("xlsx", "GetSelection.xlsx");
builder.CloseFile();