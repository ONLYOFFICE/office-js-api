// This example demonstrates setting the number format for a unique values conditional formatting rule.

// How to apply number formatting to unique values conditional formatting.

// Set the number format pattern for the unique values rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Numbers");
worksheet.GetRange("A2").SetValue(10.5);
worksheet.GetRange("A3").SetValue(20.3);
worksheet.GetRange("A4").SetValue(10.5);
worksheet.GetRange("A5").SetValue(30.7);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetNumberFormat("0.00%");

worksheet.GetRange("C1").SetValue("Number format set to percentage");
