// This example shows how to get number format from above average rule.

// How to retrieve number formatting from above average conditional formatting.

// Get the number format pattern from the above average rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Currency Values");
worksheet.GetRange("A2").SetValue(1500);
worksheet.GetRange("A3").SetValue(2200);
worksheet.GetRange("A4").SetValue(900);
worksheet.GetRange("A5").SetValue(1800);

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();
let aboveAverageCondition = formatConditions.AddAboveAverage();

aboveAverageCondition.SetNumberFormat("$#,##0.00");
let numberFormat = aboveAverageCondition.GetNumberFormat();

worksheet.GetRange("C1").SetValue("Number format applied:");
worksheet.GetRange("C2").SetValue(numberFormat);
