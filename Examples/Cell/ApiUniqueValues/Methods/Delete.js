// This example demonstrates deleting a unique values conditional formatting rule.

// How to remove unique values conditional formatting from a range.

// Delete the unique values formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let countBefore = formatConditions.GetCount();

uniqueValuesCondition.Delete();

let countAfter = formatConditions.GetCount();

worksheet.GetRange("C1").SetValue("Count before deletion:");
worksheet.GetRange("C2").SetValue(countBefore);
worksheet.GetRange("C3").SetValue("Count after deletion:");
worksheet.GetRange("C4").SetValue(countAfter);