// This example sets the scope type of a conditional formatting rule.

// How to change the scope type of conditional formatting rules.

// Set conditional formatting rule scope type.

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

worksheet.GetRange("C1").SetValue("Original scope:");
worksheet.GetRange("C2").SetValue(condition1.GetScopeType());

condition1.SetScopeType("xlDataFieldScope");

worksheet.GetRange("C4").SetValue("New scope:");
worksheet.GetRange("C5").SetValue(condition1.GetScopeType());
