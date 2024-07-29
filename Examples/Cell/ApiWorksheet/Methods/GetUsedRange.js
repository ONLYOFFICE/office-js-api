// This example shows how to get the ApiRange object that represents the used range on the specified worksheet.
var oWorksheet = Api.GetActiveSheet();
var oUsedRange = oWorksheet.GetUsedRange();
oUsedRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));