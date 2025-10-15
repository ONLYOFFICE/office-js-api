// This example shows how to set above average rule as first priority.

// How to move above average conditional formatting to first priority.

// Set the above average rule to be evaluated first.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Priority Test");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(200);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(150);

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();

let cellValueCondition = formatConditions.Add("xlCellValue", "xlGreater", "120");
let aboveAverageCondition = formatConditions.AddAboveAverage();

worksheet.GetRange("C1").SetValue("Before priority: " + aboveAverageCondition.GetPriority());
aboveAverageCondition.SetFirstPriority();
worksheet.GetRange("C2").SetValue("After priority: " + aboveAverageCondition.GetPriority());
