// This example demonstrates how to get the background color of an above average conditional formatting rule.

// How to retrieve the fill color applied when cells are above average.

// Get the background color from above average conditional formatting.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let aboveAvgCondition = formatConditions.AddAboveAverage();
aboveAvgCondition.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let fillColor = aboveAvgCondition.GetFillColor();

worksheet.GetRange("B1").SetValue("Fill Color Retrieved");
worksheet.GetRange("B2").SetValue(fillColor !== "No Fill" ? "Yellow color applied" : "No color");
