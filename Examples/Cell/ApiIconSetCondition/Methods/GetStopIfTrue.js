// This example demonstrates getting the stop-if-true property of an icon set rule.

// How to check if rule evaluation stops when this icon set rule is true.

// Get the stop-if-true setting from the icon set rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Grades");
worksheet.GetRange("A2").SetValue(89);
worksheet.GetRange("A3").SetValue(69);
worksheet.GetRange("A4").SetValue(49);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

let stopIfTrue = iconCondition.GetStopIfTrue();

worksheet.GetRange("B1").SetValue("Stop if true: " + stopIfTrue);
