// This example freezes first column then unfreeze all panes in the worksheet.
builder.CreateFile("xlsx");
Api.FreezePanes('column');
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
oFreezePanes.Unfreeze();
var oRange = oFreezePanes.GetLocation();
oWorksheet.GetRange("A1").SetValue("Location: ");
oWorksheet.GetRange("B1").SetValue(oRange + "");
builder.SaveFile("xlsx", "Unfreeze.xlsx");
builder.CloseFile();