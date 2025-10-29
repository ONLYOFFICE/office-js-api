// This example demonstrates setting an icon set rule to first priority.

// How to move icon set conditional formatting to first evaluation priority.

// Set the icon set rule to be evaluated first.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Values");
worksheet.GetRange("A2").SetValue(85);
worksheet.GetRange("A3").SetValue(65);
worksheet.GetRange("A4").SetValue(45);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();
let dataBarCondition = formatConditions.AddDatabar();

worksheet.GetRange("B1").SetValue("Priority before: " + iconCondition.GetPriority());

iconCondition.SetFirstPriority();

worksheet.GetRange("B2").SetValue("Priority after: " + iconCondition.GetPriority());
