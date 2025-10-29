// This example shows how to enable percentile values for icon set thresholds.

// How to configure icon set to use percentile values instead of actual values.

// Enable percentile values for icon set threshold calculation.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Scores");
worksheet.GetRange("A2").SetValue(95);
worksheet.GetRange("A3").SetValue(80);
worksheet.GetRange("A4").SetValue(65);
worksheet.GetRange("A5").SetValue(50);
worksheet.GetRange("A6").SetValue(35);

let range = worksheet.GetRange("A2:A6");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

worksheet.GetRange("B1").SetValue("Before: Using number values");
iconCondition.SetPercentileValues(true);
worksheet.GetRange("B2").SetValue("After: Using percentile values");
