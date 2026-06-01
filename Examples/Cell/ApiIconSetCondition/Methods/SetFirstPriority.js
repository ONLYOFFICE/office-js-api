// Promote an icon set formatting rule to the top of the evaluation order in a spreadsheet.

// How do I make an icon set rule take precedence over all other formatting rules in a spreadsheet?

// Ensure an icon set rule is processed before any other conditional formatting rule in a spreadsheet.

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