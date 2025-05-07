// This example freezes first column and get pastes a freezed range address into the table.

// How to get location address of a freezed column.

// Get an address of a column from freezed panes and display it in the worksheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());