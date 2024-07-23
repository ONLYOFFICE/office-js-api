// This example sets the state of sheet visibility.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetVisible(true);
oWorksheet.GetRange("A1").SetValue("The current worksheet is visible.");
builder.SaveFile("xlsx", "SetVisible.xlsx");
builder.CloseFile();