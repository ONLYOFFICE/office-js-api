// This example shows how to get the ApiRange object that represents the used range on the specified worksheet.

// How to get used ranges from the worksheet.

// Get used ranges and fill it with color.

let worksheet = Api.GetActiveSheet();
let usedRange = worksheet.GetUsedRange();
usedRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
