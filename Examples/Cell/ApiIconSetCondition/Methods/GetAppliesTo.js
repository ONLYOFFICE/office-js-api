// Find which cells an icon set conditional formatting rule covers in a spreadsheet.

// How do I check which range of cells an icon set rule is applied to in a spreadsheet?

// Confirm the exact cell range that an icon set formatting condition targets in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue(80);
worksheet.GetRange("A3").SetValue(60);
worksheet.GetRange("A4").SetValue(40);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

let appliesTo = iconCondition.GetAppliesTo();

worksheet.GetRange("B1").SetValue("Applies to: " + appliesTo.GetAddress());