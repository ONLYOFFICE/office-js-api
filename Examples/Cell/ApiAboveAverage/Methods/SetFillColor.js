// This example demonstrates how to set the background color for an above average conditional formatting rule.

// How to apply a fill color to cells that are above average.

// Set background color for above average conditional formatting.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Values");
worksheet.GetRange("A2").SetValue(80);
worksheet.GetRange("A3").SetValue(95);
worksheet.GetRange("A4").SetValue(70);
worksheet.GetRange("A5").SetValue(85);
worksheet.GetRange("A6").SetValue(60);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let aboveAvgCondition = formatConditions.AddAboveAverage();

let greenColor = Api.CreateColorFromRGB(0, 255, 0);
aboveAvgCondition.SetFillColor(greenColor);

worksheet.GetRange("B1").SetValue("Above average cells are highlighted in green");
