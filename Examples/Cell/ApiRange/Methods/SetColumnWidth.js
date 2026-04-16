// Set the width of all the columns in the range in a spreadsheet.

// How to make a cell column wider.

// Get a range and set its column width in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetColumnWidth(20);