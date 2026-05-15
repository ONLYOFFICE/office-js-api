// Remove an icon set conditional formatting rule from a range in a spreadsheet.

// How do I delete an icon set rule so cells no longer show icons based on their values in a spreadsheet?

// Clear an icon set condition to stop cells from displaying colored icons automatically in a spreadsheet.

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