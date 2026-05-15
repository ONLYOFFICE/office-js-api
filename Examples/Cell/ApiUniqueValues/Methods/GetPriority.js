// Read the evaluation priority of a unique-values conditional formatting rule in a spreadsheet.

// How do I check the order in which a unique-values rule is evaluated against other rules in a spreadsheet?

// Confirm the precedence number of a unique-values rule to understand its position in the formatting queue in a spreadsheet.

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