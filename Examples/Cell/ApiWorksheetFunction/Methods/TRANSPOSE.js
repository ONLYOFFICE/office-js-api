// Convert a vertical range of cells to a horizontal range, or vice versa in a spreadsheet.

// Flip the orientation of a 2x2 range from rows to columns.

// Apply the TRANSPOSE function to rearrange the cell range layout.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue("Ann");
worksheet.GetRange("A2").SetValue("Bob");
worksheet.GetRange("B1").SetValue("Apples");
worksheet.GetRange("B2").SetValue("ranges");
let range = worksheet.GetRange("A1:B2");
worksheet.GetRange("A4:B5").SetValue(func.TRANSPOSE(range));