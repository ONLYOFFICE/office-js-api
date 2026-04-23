// Lock the first column and show the active freeze type in a cell in a spreadsheet.

// How do I find out which rows or columns are currently frozen in a spreadsheet?

// Check what kind of pane freeze is applied and record it in a cell in a spreadsheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Type: ");
worksheet.GetRange("B1").SetValue(Api.GetFreezePanesType());