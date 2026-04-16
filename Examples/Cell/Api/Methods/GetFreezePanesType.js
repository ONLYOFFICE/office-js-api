// Freeze first column and get pastes a freezed type into the table in a spreadsheet.

// How to freeze a column in a worksheet.

// Freeze worksheet column and show its name in a cell.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Type: ");
worksheet.GetRange("B1").SetValue(Api.GetFreezePanesType());