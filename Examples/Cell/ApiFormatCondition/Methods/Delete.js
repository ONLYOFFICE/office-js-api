// This example deletes a conditional formatting rule.

// How to remove specific conditional formatting rules from a range.

// Delete conditional formatting rule.

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

worksheet.GetRange("C1").SetValue("Rules before deletion:");
worksheet.GetRange("C2").SetValue(formatConditions.GetCount());

condition1.Delete();

worksheet.GetRange("D1").SetValue("Rules after deletion:");
worksheet.GetRange("D2").SetValue(formatConditions.GetCount());
