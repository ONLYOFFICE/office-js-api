// Highlight the top-ranked values with a special color in a spreadsheet.

// How do I automatically mark the highest entries in a list of numbers in a spreadsheet?

// Apply color-based ranking to stand out the best-performing cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Figures");
worksheet.GetRange("A2").SetValue(120);
worksheet.GetRange("A3").SetValue(380);
worksheet.GetRange("A4").SetValue(250);
worksheet.GetRange("A5").SetValue(450);
worksheet.GetRange("A6").SetValue(180);
worksheet.GetRange("A7").SetValue(320);
worksheet.GetRange("A8").SetValue(90);
worksheet.GetRange("A9").SetValue(410);
worksheet.GetRange("A10").SetValue(200);
worksheet.GetRange("A11").SetValue(480);
worksheet.GetRange("A12").SetValue(560);

let dataRange = worksheet.GetRange("A2:A12");

let formatConditions = dataRange.GetFormatConditions();

let top10Condition = formatConditions.AddTop10();
if (top10Condition) {
    top10Condition.SetFillColor(Api.CreateColorFromRGB(255, 215, 0));
}