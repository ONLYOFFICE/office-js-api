// This example demonstrates getting the range to which a unique values conditional formatting rule applies.

// How to retrieve the range where unique values conditional formatting is applied.

// Get the range to which the unique values rule applies.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

// Get the range to which this formatting rule applies
let appliedRange = uniqueValuesCondition.GetAppliesTo();

worksheet.GetRange("C1").SetValue("Applied Range Address:");
worksheet.GetRange("C2").SetValue(appliedRange.GetAddress());
