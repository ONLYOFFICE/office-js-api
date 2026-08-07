// Stop the evaluation of the lower priority formatting rules when a top/bottom rule is fulfilled in a spreadsheet.

// How do I prevent the other formatting rules from being applied to the top values in a spreadsheet?

// Keep the two greatest values formatted by the top 10 rule only in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let top10 = formatConditions.AddTop10();
let condition = formatConditions.Add("xlCellValue", "xlGreater", "20");

top10.SetRank(2);
top10.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));
top10.SetStopIfTrue(true);

condition.SetNumberFormat("0.00");

worksheet.GetRange("C1").SetValue("The top 2 cells keep the general number format");