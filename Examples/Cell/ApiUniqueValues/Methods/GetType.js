// Get the type of the unique values conditional formatting rule in a spreadsheet.

// How to retrieve the formatting rule type from unique values conditional formatting.

// Get the type of the unique values rule in a spreadsheet.

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