// Change the cell range covered by a unique values formatting rule in a spreadsheet.

// How do I update which cells a unique values formatting rule applies to in a spreadsheet?

// Expand or narrow the area a unique values rule highlights in a spreadsheet.

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