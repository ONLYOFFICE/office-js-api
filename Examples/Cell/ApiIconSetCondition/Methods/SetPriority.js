// Assign a specific priority order to an icon set formatting rule in a spreadsheet.

// How do I control when an icon set rule is evaluated relative to other rules in a spreadsheet?

// Reorder formatting rules so the icon set runs at the desired position in the evaluation sequence.

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