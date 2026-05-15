// Set the width of columns in a range in a spreadsheet.

// How do I make a column wider or narrower in a spreadsheet?

// Resize every column covered by a range to a specific width in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetColumnWidth(20);