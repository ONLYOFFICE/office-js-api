// Highlight cells whose values exceed the average of the range in a spreadsheet.

// How do I automatically mark cells that are above the group average in a spreadsheet?

// Draw attention to standout high values by coloring them relative to the mean in a spreadsheet.

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