// This example demonstrates setting the stop-if-true property of an icon set rule.

// How to configure if rule evaluation stops when this icon set rule is true.

// Set the stop-if-true setting for the icon set rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Scores");
worksheet.GetRange("A2").SetValue(91);
worksheet.GetRange("A3").SetValue(71);
worksheet.GetRange("A4").SetValue(51);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

worksheet.GetRange("B1").SetValue("Stop if true before: " + iconCondition.GetStopIfTrue());

iconCondition.SetStopIfTrue(true);

worksheet.GetRange("B2").SetValue("Stop if true after: " + iconCondition.GetStopIfTrue());
