// This example shows how to get the ApiRange object that represents the rectangular intersection of two or more ranges.
var oWorksheet = Api.GetActiveSheet();
var oRange1 = oWorksheet.GetRange("A1:C5");
var oRange2 = oWorksheet.GetRange("B2:B4");
var oRange = Api.Intersect(oRange1, oRange2);
oRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));