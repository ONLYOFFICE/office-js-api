// This example shows how to get the ApiRange object that represents the used range on the specified worksheet.
let worksheet = Api.GetActiveSheet();
let usedRange = worksheet.GetUsedRange();
usedRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));