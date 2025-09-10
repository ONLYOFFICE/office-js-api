// This example sets the stop if true setting for the top 10 conditional formatting rule.

// How to configure if conditional formatting rule stops evaluation when condition is met.

// Set top 10 rule stop if true.

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

let stopBefore = condition1.GetStopIfTrue();
condition1.SetStopIfTrue(true);
let stopAfter = condition1.GetStopIfTrue();

worksheet.GetRange("C1").SetValue("Stop before: " + (stopBefore ? "Yes" : "No"));
worksheet.GetRange("C2").SetValue("Stop after: " + (stopAfter ? "Yes" : "No"));
