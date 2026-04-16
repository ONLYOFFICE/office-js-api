// Get the cell range object that represents the used range on the specified worksheet in a spreadsheet.

// How to get used ranges from the worksheet.

// Get used ranges and fill it with color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let usedRange = worksheet.GetUsedRange();
usedRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));