// Find which cells actually contain data on a sheet in a spreadsheet.

// Detect the exact boundaries of content without empty rows or columns in a spreadsheet?

// Shade all populated cells with a background color to visualize data extent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let usedRange = worksheet.GetUsedRange();
usedRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));