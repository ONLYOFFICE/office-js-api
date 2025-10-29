// This example demonstrates setting the scope type of a unique values conditional formatting rule.

// How to configure the scope type setting for unique values conditional formatting.

// Set the scope type of the unique values rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetScopeType(0);

worksheet.GetRange("C1").SetValue("Scope type set to 0");
