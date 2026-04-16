// Freeze first column and get pastes a freezed range address into the table in a spreadsheet.

// How to get freezed panes in a spreadsheet.

// Get all freezed panes, its location and show it on the worksheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());