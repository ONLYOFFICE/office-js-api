// This example shows how to get the state of sheet visibility.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetVisible(true);
var bVisible = oWorksheet.GetVisible();
oWorksheet.GetRange("A1").SetValue("Visible: ");
oWorksheet.GetRange("B1").SetValue(bVisible);
builder.SaveFile("xlsx", "GetVisible.xlsx");
builder.CloseFile();