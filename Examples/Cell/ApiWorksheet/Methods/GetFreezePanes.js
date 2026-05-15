// Read the frozen pane area and display its address on the sheet in a spreadsheet.

// How do I find out which rows or columns are frozen in a spreadsheet?

// Check where the freeze boundary is and write its location to a cell in a spreadsheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());