// This example gets the stop if true setting of a conditional formatting rule.

// How to retrieve the stop evaluation setting from conditional formatting rules.

// Get conditional formatting rule stop if true setting.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

let stopIfTrue = condition1.GetStopIfTrue();

worksheet.GetRange("C1").SetValue("Stop if true:");
worksheet.GetRange("C2").SetValue(stopIfTrue.toString());
