// Check if icon set uses percentile values in a spreadsheet.

// How to determine if percentile values are used for icon set thresholds in a spreadsheet.

// Check if the icon set rule uses percentile values for criteria in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(25);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

iconCondition.SetPercentileValues(true);

let usesPercentiles = iconCondition.GetPercentileValues();
worksheet.GetRange("B1").SetValue("Uses percentiles: " + usesPercentiles);