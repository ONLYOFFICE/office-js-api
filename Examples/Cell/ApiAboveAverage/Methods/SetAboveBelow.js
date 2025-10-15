// This example demonstrates setting whether the rule looks for above or below average values.

// How to switch between above average and below average conditions.

// Toggle between above and below average conditional formatting.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);
worksheet.GetRange("A5").SetValue(40);
worksheet.GetRange("A6").SetValue(50);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition = formatConditions.AddAboveAverage();
condition.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

worksheet.GetRange("C1").SetValue("Before:");
worksheet.GetRange("C2").SetValue(condition.GetAboveBelow() ? "Above" : "Below");

condition.SetAboveBelow(false);

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(condition.GetAboveBelow() ? "Above" : "Below");
