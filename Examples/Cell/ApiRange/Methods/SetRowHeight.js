// Set the row height value in a spreadsheet.

// How to set a row height of cells.

// Get a range and specify its row height in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetRowHeight(32);