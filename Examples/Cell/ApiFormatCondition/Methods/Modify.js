// This example modifies a conditional formatting rule.

// How to change the conditions of existing conditional formatting rules.

// Modify conditional formatting rule parameters.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(30);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(40);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlLess", "50");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Original formula:");
worksheet.GetRange("C2").SetValue(condition1.Formula1);

condition1.Modify("xlCellValue", "xlGreater", "200");

worksheet.GetRange("C4").SetValue("Modified formula:");
worksheet.GetRange("C5").SetValue(condition1.Formula1);
