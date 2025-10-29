// This example demonstrates modifying the range to which a unique values conditional formatting rule applies.

// How to change the range for existing conditional formatting rule.

// Modify the applies to range of unique values formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let originalRange = uniqueValuesCondition.GetAppliesTo();
let originalAddress = originalRange.GetAddress();

let newRange = worksheet.GetRange("A2:B5");
uniqueValuesCondition.ModifyAppliesToRange(newRange);

let modifiedRange = uniqueValuesCondition.GetAppliesTo();
let modifiedAddress = modifiedRange.GetAddress();

worksheet.GetRange("D1").SetValue("Original range:");
worksheet.GetRange("D2").SetValue(originalAddress);
worksheet.GetRange("D3").SetValue("Modified range:");
worksheet.GetRange("D4").SetValue(modifiedAddress);