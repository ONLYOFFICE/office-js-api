// Access a specific cell within a range by its row and column position in a spreadsheet.

// How do I pick out one cell from a larger range in a spreadsheet?

// Target a single cell inside a multi-cell range and fill it with a highlight color.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C3");
range.GetCells(2, 1).SetFillColor(Api.CreateColorFromRGB(255, 213, 191));