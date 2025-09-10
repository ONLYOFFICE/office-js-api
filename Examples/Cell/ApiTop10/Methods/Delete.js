// This example demonstrates how to delete a top 10 conditional formatting rule.

// How to remove conditional formatting rules from a range.

// Delete top 10 conditional formatting rule.

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

let countBefore = formatConditions.GetCount();
condition1.Delete();
let countAfter = formatConditions.GetCount();

worksheet.GetRange("C1").SetValue("Rules before: " + countBefore);
worksheet.GetRange("C2").SetValue("Rules after: " + countAfter);
