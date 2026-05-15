// Look up the column number of a specific cell in a spreadsheet.

// How do I find which column number a cell belongs to in a spreadsheet?

// Read a cell's column position and print that number onto the sheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("D9").GetCol();
worksheet.GetRange("A2").SetValue(range.toString());