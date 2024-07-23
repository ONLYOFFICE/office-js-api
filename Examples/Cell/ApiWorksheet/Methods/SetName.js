// This example sets a name to the active sheet.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetName("sheet 1");
var sName = oWorksheet.GetName();
oWorksheet.GetRange("A1").SetValue("Worksheet name: ");
oWorksheet.GetRange("A1").AutoFit(false, true);
oWorksheet.GetRange("B1").SetValue(sName);
builder.SaveFile("xlsx", "SetName.xlsx");
builder.CloseFile();