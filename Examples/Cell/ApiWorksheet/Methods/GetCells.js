// Select every cell on a worksheet at once in a spreadsheet.

// How do I target all cells on a sheet in a spreadsheet?

// Apply formatting across the entire worksheet by referencing all its cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let cells = worksheet.GetCells();
cells.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));