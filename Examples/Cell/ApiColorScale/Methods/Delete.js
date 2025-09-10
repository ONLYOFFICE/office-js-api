// This example deletes a color scale conditional formatting rule.

// How to remove color scale formatting from a range.

// Delete color scale rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale();

worksheet.GetRange("C1").SetValue("Rules before deletion:");
worksheet.GetRange("C2").SetValue(formatConditions.GetCount());

colorScale.Delete();

worksheet.GetRange("D1").SetValue("Rules after deletion:");
worksheet.GetRange("D2").SetValue(formatConditions.GetCount());
