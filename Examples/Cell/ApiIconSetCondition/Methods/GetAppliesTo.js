// This example demonstrates getting the range to which an icon set rule applies.

// How to retrieve the applied range of icon set conditional formatting.

// Get the range where icon set formatting is applied.

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
