// Read the address of the currently frozen area and display it in a cell in a spreadsheet.

// How do I find out which rows or columns are currently locked in place in a spreadsheet?

// Retrieve the cell reference of the frozen region to confirm what is pinned in a spreadsheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());