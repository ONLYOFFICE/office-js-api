// Select all cells within a specified column range on a worksheet in a spreadsheet.

// How do I target every cell in a set of columns in a spreadsheet?

// Apply formatting to a group of columns by referencing all their cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let cols = worksheet.GetCols("A1:C1");
cols.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));