// Retrieve the row number of a cell in a spreadsheet.

// How do I find out which row a specific cell belongs to in a spreadsheet?

// Identify the position of a cell within the sheet by reading its row index in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A9").GetRow();
worksheet.GetRange("A2").SetValue(range.toString());