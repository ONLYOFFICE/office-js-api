// Read the background color used to highlight above-average cells in a spreadsheet.

// How do I find out what fill color an above-average conditional formatting rule uses in a spreadsheet?

// Inspect the highlight shade assigned to cells that exceed the average value in a spreadsheet.

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