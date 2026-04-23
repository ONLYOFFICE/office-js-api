// Read the width of a column and display the value on the sheet in a spreadsheet.

// How do I find out the current width of a column in a spreadsheet?

// Measure a column's width and record that measurement in a nearby cell.

let worksheet = Api.GetActiveSheet();
let width = worksheet.GetRange("A1").GetColumnWidth();
worksheet.GetRange("A1").SetValue("Width: ");
worksheet.GetRange("B1").SetValue(width);