// Freeze first column and get pastes a freezed range address into the table in a spreadsheet.

// How to freeze a column and get its address in a spreadsheet.

// Insert address of freezed columns into a range in a spreadsheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());