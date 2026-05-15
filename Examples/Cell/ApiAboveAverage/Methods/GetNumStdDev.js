// Read how many standard deviations away from the mean a conditional formatting rule uses in a spreadsheet.

// How do I check the standard deviation threshold set on an above-average formatting rule in a spreadsheet?

// Verify the deviation count that controls which cells get highlighted by an average-based rule in a spreadsheet.

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

let numStdDev = condition.GetNumStdDev();

worksheet.GetRange("C1").SetValue("Std Deviations:");
worksheet.GetRange("C2").SetValue(numStdDev.toString());