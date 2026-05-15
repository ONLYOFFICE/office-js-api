// Color the background of cells whose values exceed the average in a spreadsheet.

// How do I highlight above-average cells with a specific background color in a spreadsheet?

// Make standout values easy to spot by filling their cells with a chosen color in a spreadsheet.

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