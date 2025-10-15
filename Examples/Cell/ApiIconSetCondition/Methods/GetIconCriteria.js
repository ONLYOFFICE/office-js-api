// This example shows how to get icon criteria collection.

// How to retrieve icon criteria for conditional formatting.

// Get the collection of icon criteria from the formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance");
worksheet.GetRange("A2").SetValue(95);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(55);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
worksheet.GetRange("B1").SetValue("Number of criteria: " + criteria.length);
