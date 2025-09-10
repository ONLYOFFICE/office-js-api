// This example sets the fill color for the top 10 conditional formatting rule.

// How to apply fill color to conditional formatting rules.

// Set top 10 rule fill color.

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

let colorBefore = condition1.GetFillColor();
condition1.SetFillColor(Api.CreateColorFromRGB(0, 255, 0));
let colorAfter = condition1.GetFillColor();

worksheet.GetRange("C1").SetValue("Fill color changed");
worksheet.GetRange("C2").SetValue("Top 2 values now green");
