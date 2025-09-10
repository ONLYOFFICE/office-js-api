// This example sets the number format for a conditional formatting rule.

// How to apply number formatting to conditional formatting rules.

// Set conditional formatting rule number format.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(1234.56);
worksheet.GetRange("A3").SetValue(2500.75);
worksheet.GetRange("A4").SetValue(150.25);
worksheet.GetRange("A5").SetValue(3000.00);
worksheet.GetRange("A6").SetValue(750.50);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "2000");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Original format:");
worksheet.GetRange("C2").SetValue(condition1.GetNumberFormat());

condition1.SetNumberFormat("$#,##0.00");

worksheet.GetRange("C4").SetValue("New format:");
worksheet.GetRange("C5").SetValue(condition1.GetNumberFormat());
