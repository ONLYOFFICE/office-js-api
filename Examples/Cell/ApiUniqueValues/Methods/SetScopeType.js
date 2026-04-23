// Define the scope boundary for a unique values formatting rule in a spreadsheet.

// How do I specify what area a unique values formatting rule covers in a spreadsheet?

// Narrow or widen the scope a unique values rule uses when detecting entries in a spreadsheet.

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