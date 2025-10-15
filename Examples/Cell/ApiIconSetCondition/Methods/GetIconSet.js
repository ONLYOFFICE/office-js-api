// This example shows how to get the icon set type from conditional formatting.

// How to retrieve the current icon set type used in conditional formatting.

// Get the icon set type assigned to the formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Score");
worksheet.GetRange("A2").SetValue(85);
worksheet.GetRange("A3").SetValue(70);
worksheet.GetRange("A4").SetValue(45);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

iconCondition.SetIconSet("xl3TrafficLights1");

let iconSet = iconCondition.GetIconSet();
worksheet.GetRange("B1").SetValue("Current icon set: " + iconSet);
