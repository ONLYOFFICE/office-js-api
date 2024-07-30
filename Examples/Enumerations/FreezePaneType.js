// This example freezes first column and get pastes a freezed range address into the table.
builder.CreateFile("xlsx");
Api.SetFreezePanesType('column');
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
var oRange = oFreezePanes.GetLocation();
oWorksheet.GetRange("A1").SetValue("Location: ");
oWorksheet.GetRange("B1").SetValue(oRange.GetAddress());
builder.SaveFile("xlsx", "FreezePanes.xlsx");
builder.CloseFile();