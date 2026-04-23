// Read the scope type that determines where a unique-values formatting rule takes effect in a spreadsheet.

// How do I find out the scope setting of a unique-values conditional formatting rule in a spreadsheet?

// Verify whether a unique-values rule is scoped to the whole sheet or a specific selection in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let scopeType = uniqueValuesCondition.GetScopeType();

worksheet.GetRange("C1").SetValue("Scope type:");
worksheet.GetRange("C2").SetValue(scopeType);