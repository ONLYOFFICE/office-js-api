// This example demonstrates deleting an icon set conditional formatting rule.

// How to remove icon set conditional formatting from a range.

// Delete the icon set formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance");
worksheet.GetRange("A2").SetValue(95);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(55);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();
iconCondition.SetIconSet("xl3TrafficLights1");

worksheet.GetRange("B1").SetValue("Before delete: " + formatConditions.GetCount());

iconCondition.Delete();

worksheet.GetRange("B2").SetValue("After delete: " + formatConditions.GetCount());
