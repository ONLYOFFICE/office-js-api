// This example demonstrates getting the parent object of a unique values conditional formatting rule.

// How to retrieve the parent object that contains unique values conditional formatting.

// Get the parent object of the unique values rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let parent = uniqueValuesCondition.GetParent();
let parentAddress = parent.GetAddress();

worksheet.GetRange("C1").SetValue("Parent range:");
worksheet.GetRange("C2").SetValue(parentAddress);
