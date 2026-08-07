// Stop the evaluation of the lower priority formatting rules when an above average rule is fulfilled in a spreadsheet.

// How do I prevent the other formatting rules from being applied to the above average cells in a spreadsheet?

// Keep the above average cells formatted by the first rule only in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let aboveAverage = formatConditions.AddAboveAverage();
let condition = formatConditions.Add("xlCellValue", "xlGreater", "20");

aboveAverage.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));
aboveAverage.SetStopIfTrue(true);

condition.SetNumberFormat("0.00");

worksheet.GetRange("C1").SetValue("The above average cells keep the general number format");