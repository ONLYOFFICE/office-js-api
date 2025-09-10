// This example demonstrates modifying the range to which an icon set formatting rule applies.

// How to change the range where icon set conditional formatting is applied.

// Modify the range for the icon set formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(200);
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("B3").SetValue(250);

let range = worksheet.GetRange("A2:A3");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();
iconCondition.SetIconSet("xl3Arrows");

let newRange = worksheet.GetRange("A2:B3");
iconCondition.ModifyAppliesToRange(newRange);

worksheet.GetRange("C1").SetValue("Icon set applied to A2:B3");
