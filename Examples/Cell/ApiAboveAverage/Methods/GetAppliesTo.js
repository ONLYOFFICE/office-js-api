// Retrieve the cell range covered by an above-average conditional formatting rule in a spreadsheet.

// How do I find out which cells an above-average highlight rule is applied to in a spreadsheet?

// Confirm the target range of an average-based rule by reading its applied area in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Student Grades");
worksheet.GetRange("A2").SetValue(75);
worksheet.GetRange("A3").SetValue(88);
worksheet.GetRange("A4").SetValue(92);
worksheet.GetRange("A5").SetValue(67);
worksheet.GetRange("A6").SetValue(85);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();
let aboveAverageCondition = formatConditions.AddAboveAverage();
aboveAverageCondition.GetFont().SetColor(Api.CreateColorFromRGB(0, 128, 0));

let appliedRange = aboveAverageCondition.GetAppliesTo();
worksheet.GetRange("C1").SetValue("Rule applies to:");
worksheet.GetRange("C2").SetValue(appliedRange.GetAddress());