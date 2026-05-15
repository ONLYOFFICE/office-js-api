// Combine a group of cells into one single cell in a spreadsheet.

// How do I merge multiple cells together into one in a spreadsheet?

// Join adjacent cells across rows or columns into a unified block in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3:E8").Merge(true);
worksheet.GetRange("A9:E14").Merge(false);