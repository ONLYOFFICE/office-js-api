// This example adds above average conditional formatting to a range.

// How to add above average conditional formatting rules to highlight cells.

// Add above average conditional formatting to cells.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Scores");
worksheet.GetRange("A2").SetValue(85);
worksheet.GetRange("A3").SetValue(92);
worksheet.GetRange("A4").SetValue(78);
worksheet.GetRange("A5").SetValue(88);
worksheet.GetRange("A6").SetValue(95);
worksheet.GetRange("A7").SetValue(72);
worksheet.GetRange("A8").SetValue(90);

let dataRange = worksheet.GetRange("A2:A8");

let formatConditions = dataRange.GetFormatConditions();

let aboveAverageCondition = formatConditions.AddAboveAverage();
if (aboveAverageCondition) {
    aboveAverageCondition.SetFillColor(Api.CreateColorFromRGB(144, 238, 144));
}
