// This example finds the previous cell that matches those same conditions.

// How to get the previous cell from a range that meets search requirements.

// Get a range, find the previous cell that satisfies search conditions and fill it with color.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B1").SetValue(2014);
oWorksheet.GetRange("C1").SetValue(2015);
oWorksheet.GetRange("D1").SetValue(2016);
oWorksheet.GetRange("A2").SetValue("Projected Revenue");
oWorksheet.GetRange("A3").SetValue("Estimated Costs");
oWorksheet.GetRange("A4").SetValue("Cost price");
oWorksheet.GetRange("B2").SetValue(200);
oWorksheet.GetRange("B3").SetValue(250);
oWorksheet.GetRange("B4").SetValue(50);
oWorksheet.GetRange("C2").SetValue(200);
oWorksheet.GetRange("C3").SetValue(260);
oWorksheet.GetRange("C4").SetValue(120);
oWorksheet.GetRange("D2").SetValue(200);
oWorksheet.GetRange("D3").SetValue(200);
oWorksheet.GetRange("D4").SetValue(160);
var oRange = oWorksheet.GetRange("A2:D4");
var oSearchRange = oRange.Find("200", "B1", "xlValues", "xlWhole", "xlByColumns", "xlNext", true);
oSearchRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
var oNextSearchRange = oRange.FindNext(oSearchRange);
oNextSearchRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
var oPrevSearchRange = oRange.FindPrevious(oNextSearchRange);
oPrevSearchRange.SetValue(0);