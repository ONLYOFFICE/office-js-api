// This example demonstrates setting the duplicate/unique value setting for a unique values conditional formatting rule.

// How to change between highlighting unique or duplicate values.

// Set unique values rule to highlight duplicates instead.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");
worksheet.GetRange("A6").SetValue("Banana");

let range = worksheet.GetRange("A2:A6");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let settingBefore = uniqueValuesCondition.GetDupeUnique();
uniqueValuesCondition.SetDupeUnique("xlDuplicate");
let settingAfter = uniqueValuesCondition.GetDupeUnique();

uniqueValuesCondition.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Setting before: " + settingBefore);
worksheet.GetRange("C2").SetValue("Setting after: " + settingAfter);
worksheet.GetRange("C3").SetValue("Now highlighting duplicates");