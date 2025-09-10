// This example sets the priority of a conditional formatting rule.

// How to change the priority value of conditional formatting rules.

// Set conditional formatting rule priority.

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

worksheet.GetRange("C1").SetValue("Original priority:");
worksheet.GetRange("C2").SetValue(condition1.GetPriority());

condition1.SetPriority(5);

worksheet.GetRange("C4").SetValue("New priority:");
worksheet.GetRange("C5").SetValue(condition1.GetPriority());
