// Display icons in reverse order within an icon set formatting rule in a spreadsheet.

// How do I flip the direction of icons so the highest value gets the lowest icon in a spreadsheet?

// Invert the visual meaning of an icon set to match a descending scale or reversed ranking.

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