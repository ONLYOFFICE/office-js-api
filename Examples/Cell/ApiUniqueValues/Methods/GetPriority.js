// This example demonstrates getting the priority of a unique values conditional formatting rule.

// How to retrieve the evaluation priority of unique values conditional formatting.

// Get the priority value of the unique values rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let priority = uniqueValuesCondition.GetPriority();

worksheet.GetRange("C1").SetValue("Priority:");
worksheet.GetRange("C2").SetValue(priority);
