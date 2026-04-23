// Assign a threshold value to an icon criterion in a spreadsheet.

// How do I change the cutoff number that determines which icon a cell displays in a spreadsheet?

// Update the boundary value for one of the icon set thresholds so cells are colored differently in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance");
worksheet.GetRange("A2").SetValue(95);
worksheet.GetRange("A3").SetValue(78);
worksheet.GetRange("A4").SetValue(62);
worksheet.GetRange("A5").SetValue(45);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
worksheet.GetRange("B1").SetValue("Before: Default threshold values");

criteria[1].SetValue("80");
worksheet.GetRange("B2").SetValue("After: Second threshold set to 80");