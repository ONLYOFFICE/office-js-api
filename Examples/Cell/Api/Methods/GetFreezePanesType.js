// This example freezes first column and get pastes a freezed type into the table.
builder.CreateFile("xlsx");
Api.SetFreezePanesType('column');
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Type: ");
oWorksheet.GetRange("B1").SetValue(Api.GetFreezePanesType());
builder.SaveFile("xlsx", "GetFreezePanesType.xlsx");
builder.CloseFile();