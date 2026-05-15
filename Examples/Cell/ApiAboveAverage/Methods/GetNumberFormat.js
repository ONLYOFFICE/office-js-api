// Read the numeric display pattern applied by an above-average conditional formatting rule in a spreadsheet.

// How do I retrieve the number format string assigned to an above-average highlight rule in a spreadsheet?

// Inspect the display format a rule applies to cells that exceed the average value in a spreadsheet.

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