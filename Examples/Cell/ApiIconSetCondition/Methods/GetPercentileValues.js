// Find out whether an icon set rule uses percentile-based thresholds in a spreadsheet.

// How do I check if an icon set rule measures thresholds as percentiles in a spreadsheet?

// Verify that the icon set rule distributes icons according to percentile values in a spreadsheet.

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