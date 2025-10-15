// This example gets the priority value of the top 10 conditional formatting rule.

// How to retrieve the priority of conditional formatting rules.

// Get top 10 rule priority.

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

let priority = condition1.GetPriority();

worksheet.GetRange("C1").SetValue("Rule priority:");
worksheet.GetRange("C2").SetValue(priority);
