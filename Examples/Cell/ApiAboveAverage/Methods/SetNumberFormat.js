// This example shows how to set number format for above average rule.

// How to apply number formatting to above average conditional formatting.

// Set the number format pattern for the above average rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Percentage Scores");
worksheet.GetRange("A2").SetValue(0.75);
worksheet.GetRange("A3").SetValue(0.88);
worksheet.GetRange("A4").SetValue(0.65);
worksheet.GetRange("A5").SetValue(0.92);

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();
let aboveAverageCondition = formatConditions.AddAboveAverage();

worksheet.GetRange("C1").SetValue("Before: General format");
aboveAverageCondition.SetNumberFormat("0.00%");
worksheet.GetRange("C2").SetValue("After: Percentage format");
