// This example shows how to get the ApiRange object that represents the used range on the specified worksheet.

// How to get used ranges from the worksheet.

// Get used ranges and fill it with color.

var oWorksheet = Api.GetActiveSheet();
var oUsedRange = oWorksheet.GetUsedRange();
oUsedRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));