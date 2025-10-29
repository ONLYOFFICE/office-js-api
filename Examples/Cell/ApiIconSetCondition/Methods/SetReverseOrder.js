// This example shows how to reverse the icon order display.

// How to change the display order of icons in icon set formatting.

// Reverse the order in which icons are displayed.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Ratings");
worksheet.GetRange("A2").SetValue(5);
worksheet.GetRange("A3").SetValue(3);
worksheet.GetRange("A4").SetValue(1);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

worksheet.GetRange("B1").SetValue("Before: Normal icon order");
iconCondition.SetReverseOrder(true);
worksheet.GetRange("B2").SetValue("After: Reversed icon order");
