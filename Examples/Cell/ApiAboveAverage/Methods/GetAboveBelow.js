// Read whether a highlight rule targets values above or below the average in a spreadsheet.

// How do I check if a conditional formatting rule highlights above-average or below-average cells in a spreadsheet?

// Determine the direction of an average-based rule to confirm which side of the average it covers in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);
worksheet.GetRange("A5").SetValue(40);
worksheet.GetRange("A6").SetValue(50);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition = formatConditions.AddAboveAverage();
condition.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let aboveBelow = condition.GetAboveBelow();

worksheet.GetRange("C1").SetValue("Above Average:");
worksheet.GetRange("C2").SetValue(aboveBelow ? "Yes" : "No");