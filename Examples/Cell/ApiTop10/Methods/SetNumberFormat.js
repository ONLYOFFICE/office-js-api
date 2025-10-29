// This example sets the number format for the top 10 conditional formatting rule.

// How to apply number format to conditional formatting rules.

// Set top 10 rule number format.

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

let formatBefore = condition1.GetNumberFormat();
condition1.SetNumberFormat("$#,##0.00");
let formatAfter = condition1.GetNumberFormat();

worksheet.GetRange("C1").SetValue("Format before: " + (formatBefore || "General"));
worksheet.GetRange("C2").SetValue("Format after: " + formatAfter);
