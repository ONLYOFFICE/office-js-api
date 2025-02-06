// This example freezes first column and get pastes a freezed range address into the table.
// How to get location address of a freezed column.
// Get an address of a column from freezed panes and diplay it in the worksheet.
Api.SetFreezePanesType('column');
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
var oRange = oFreezePanes.GetLocation();
oWorksheet.GetRange("A1").SetValue("Location: ");
oWorksheet.GetRange("B1").SetValue(oRange.GetAddress());