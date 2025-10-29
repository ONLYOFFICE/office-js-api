// This example shows how to get the range where above average rule applies.

// How to retrieve the range where above average conditional formatting is applied.

// Get the range to which the above average rule applies.

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
