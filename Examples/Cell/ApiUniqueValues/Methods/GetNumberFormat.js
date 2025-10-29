// This example demonstrates getting the number format from a unique values conditional formatting rule.

// How to retrieve number formatting from unique values conditional formatting.

// Get the number format pattern from the unique values rule.

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

let numberFormat = uniqueValuesCondition.GetNumberFormat();

worksheet.GetRange("C1").SetValue("Number format:");
worksheet.GetRange("C2").SetValue(numberFormat);
