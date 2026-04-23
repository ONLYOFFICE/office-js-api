// Read the minimum bar-length percentage from a data bar rule in a spreadsheet.

// How do I find out the lower percentage limit that controls data bar length in a spreadsheet?

// Inspect how narrow the shortest data bar can be relative to the cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let percentMin = dataBar.GetPercentMin();

worksheet.GetRange("C1").SetValue("Min Percent:");
worksheet.GetRange("C2").SetValue(percentMin + "%");