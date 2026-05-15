// Read the height of a row in a spreadsheet.

// How do I find out how tall a row is in a spreadsheet?

// Capture the current row height and display it alongside the cell content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let height = worksheet.GetRange("A1").GetRowHeight();
worksheet.GetRange("A1").SetValue("Height: ");
worksheet.GetRange("B1").SetValue(height);