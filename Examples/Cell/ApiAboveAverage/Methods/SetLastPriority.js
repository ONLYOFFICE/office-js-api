// This example shows how to set above average rule as last priority.

// How to move above average conditional formatting to last priority.

// Set the above average rule to be evaluated last.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Priority Test");
worksheet.GetRange("A2").SetValue(60);
worksheet.GetRange("A3").SetValue(80);
worksheet.GetRange("A4").SetValue(90);
worksheet.GetRange("A5").SetValue(70);

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();

let aboveAverageCondition = formatConditions.AddAboveAverage();
let cellValueCondition = formatConditions.Add("xlCellValue", "xlLess", "75");

worksheet.GetRange("C1").SetValue("Before priority: " + aboveAverageCondition.GetPriority());
aboveAverageCondition.SetLastPriority();
worksheet.GetRange("C2").SetValue("After priority: " + aboveAverageCondition.GetPriority());
