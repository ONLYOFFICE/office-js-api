// This example gets the pivot table condition status for the top 10 conditional formatting rule.

// How to check if conditional formatting rule is related to pivot tables.

// Get top 10 rule pivot table condition.

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

let ptCondition = condition1.GetPTCondition();

worksheet.GetRange("C1").SetValue("Pivot table condition:");
worksheet.GetRange("C2").SetValue(ptCondition ? "Yes" : "No");
