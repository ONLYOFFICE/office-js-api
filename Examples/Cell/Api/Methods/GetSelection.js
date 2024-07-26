// This example shows how to get an object that represents the selected range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
Api.GetSelection().SetValue("selected");
builder.SaveFile("xlsx", "GetSelection.xlsx");
builder.CloseFile();