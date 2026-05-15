// Update the cells covered by an existing above-average highlight rule in a spreadsheet.

// How do I expand or change which cells an above-average formatting rule targets in a spreadsheet?

// Reassign a highlight rule to a different set of cells without recreating it in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Original Data");
worksheet.GetRange("A2").SetValue(80);
worksheet.GetRange("A3").SetValue(90);
worksheet.GetRange("A4").SetValue(70);

worksheet.GetRange("B1").SetValue("Extended Data");
worksheet.GetRange("B2").SetValue(85);
worksheet.GetRange("B3").SetValue(95);
worksheet.GetRange("B4").SetValue(75);

let originalRange = worksheet.GetRange("A2:A4");
let formatConditions = originalRange.GetFormatConditions();
let aboveAverageCondition = formatConditions.AddAboveAverage();
aboveAverageCondition.GetFont().SetColor(Api.CreateColorFromRGB(0, 255, 0));

worksheet.GetRange("D1").SetValue("Before: A2:A4");
let newRange = worksheet.GetRange("A2:B4");
aboveAverageCondition.ModifyAppliesToRange(newRange);
worksheet.GetRange("D2").SetValue("After: A2:B4");