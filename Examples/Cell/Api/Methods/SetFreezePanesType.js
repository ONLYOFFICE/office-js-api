// This example freezes first column and get pastes a freezed range address into the table.
// How to freeze a column and get its address.
// Insert address of freezed columns into a range.
Api.SetFreezePanesType('column');
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
var oRange = oFreezePanes.GetLocation();
oWorksheet.GetRange("A1").SetValue("Location: ");
oWorksheet.GetRange("B1").SetValue(oRange.GetAddress());