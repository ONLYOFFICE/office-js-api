// This example shows how to get font from above average formatting rule.

// How to retrieve font formatting from above average conditional formatting.

// Get the font object from the above average rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance Data");
worksheet.GetRange("A2").SetValue(65);
worksheet.GetRange("A3").SetValue(85);
worksheet.GetRange("A4").SetValue(95);
worksheet.GetRange("A5").SetValue(75);

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();
let aboveAverageCondition = formatConditions.AddAboveAverage();

let font = aboveAverageCondition.GetFont();
font.SetBold(true);
font.SetColor(Api.CreateColorFromRGB(0, 0, 255));

worksheet.GetRange("C1").SetValue("Font formatting applied");
worksheet.GetRange("C2").SetValue("Bold blue text for above average");
