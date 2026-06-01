// Jump to the last occupied cell in a chosen direction within a range in a spreadsheet.

// How do I find the boundary cell of a data block by moving in a specific direction in a spreadsheet?

// Locate the edge of filled cells going left, right, up, or down and highlight it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("C4:D5");
range.End("xlToLeft").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));