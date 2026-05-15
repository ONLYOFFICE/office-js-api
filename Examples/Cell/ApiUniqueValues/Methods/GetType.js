// Read the type identifier of a unique values formatting rule in a spreadsheet.

// How do I check what type a unique values formatting rule is in a spreadsheet?

// Confirm the rule category after adding a unique values condition in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let type = uniqueValuesCondition.GetType();
worksheet.GetRange("B1").SetValue("Rule type: " + type);