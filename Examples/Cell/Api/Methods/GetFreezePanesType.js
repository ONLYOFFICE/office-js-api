// This example freezes first column and get pastes a freezed type into the table.
// How to freeze a column in a worksheet.
// Freeze worksheet column and show its name in a cell.
Api.SetFreezePanesType('column');
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Type: ");
oWorksheet.GetRange("B1").SetValue(Api.GetFreezePanesType());