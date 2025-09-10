// This example demonstrates setting the priority of an icon set rule.

// How to change the evaluation priority of icon set conditional formatting.

// Set the priority value of the icon set rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Ratings");
worksheet.GetRange("A2").SetValue(88);
worksheet.GetRange("A3").SetValue(68);
worksheet.GetRange("A4").SetValue(48);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();
let dataBarCondition = formatConditions.AddDatabar();

worksheet.GetRange("B1").SetValue("Priority before: " + iconCondition.GetPriority());

iconCondition.SetPriority(3);

worksheet.GetRange("B2").SetValue("Priority after: " + iconCondition.GetPriority());
