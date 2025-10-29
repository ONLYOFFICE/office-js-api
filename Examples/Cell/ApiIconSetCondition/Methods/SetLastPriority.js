// This example demonstrates setting an icon set rule to last priority.

// How to move icon set conditional formatting to last evaluation priority.

// Set the icon set rule to be evaluated last.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Scores");
worksheet.GetRange("A2").SetValue(90);
worksheet.GetRange("A3").SetValue(70);
worksheet.GetRange("A4").SetValue(50);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();
let colorScaleCondition = formatConditions.AddColorScale();

worksheet.GetRange("B1").SetValue("Priority before: " + iconCondition.GetPriority());

iconCondition.SetLastPriority();

worksheet.GetRange("B2").SetValue("Priority after: " + iconCondition.GetPriority());
