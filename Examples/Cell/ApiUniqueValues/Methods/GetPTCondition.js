// Check whether a unique-values conditional formatting rule has a pivot table scope condition in a spreadsheet.

// How do I find out if a unique-values rule is linked to a pivot table scope in a spreadsheet?

// Detect the pivot table association of a unique-values formatting rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let ptCondition = uniqueValuesCondition.GetPTCondition();

worksheet.GetRange("C1").SetValue("PT Condition:");
worksheet.GetRange("C2").SetValue(ptCondition ? "Available" : "Not available");