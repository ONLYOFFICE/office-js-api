// This example modifies the range where a top 10 conditional formatting rule applies.

// How to change the cell range for existing conditional formatting rules.

// Modify top 10 rule application range.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.AddTop10();
condition1.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let originalRange = condition1.GetAppliesTo().GetAddress();
condition1.ModifyAppliesToRange(worksheet.GetRange("A2:B6"));
let newRange = condition1.GetAppliesTo().GetAddress();

worksheet.GetRange("C1").SetValue("Original range: " + originalRange);
worksheet.GetRange("C2").SetValue("New range: " + newRange);
