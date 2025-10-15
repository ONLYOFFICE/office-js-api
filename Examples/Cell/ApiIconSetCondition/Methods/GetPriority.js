// This example demonstrates getting the priority of an icon set rule.

// How to retrieve the evaluation priority of icon set conditional formatting.

// Get the priority value of the icon set rule.

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
