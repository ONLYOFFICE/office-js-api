// Read the evaluation priority assigned to an icon set formatting rule in a spreadsheet.

// How do I find out the priority number of an icon set rule in a spreadsheet?

// Inspect the order in which an icon set rule is evaluated against other formatting rules in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Numbers");
worksheet.GetRange("A2").SetValue(95);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(55);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

let priority = iconCondition.GetPriority();

worksheet.GetRange("B1").SetValue("Priority: " + priority);