// Check if a sheet is hidden or visible in a spreadsheet.

// Determine the display status of a worksheet for visibility control in a spreadsheet?

// Display the visibility state in a cell to confirm sheet access in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetVisible(true);
let isVisible = worksheet.GetVisible();
worksheet.GetRange("A1").SetValue("Visible: ");
worksheet.GetRange("B1").SetValue(isVisible);