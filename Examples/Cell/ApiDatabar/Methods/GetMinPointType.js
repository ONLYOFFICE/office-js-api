// Read how the lower boundary of a data bar is defined in a spreadsheet.

// How do I find out what method sets the minimum end of a data bar in a spreadsheet?

// Identify whether the bottom limit of a data bar uses a fixed value, percentage, or automatic setting in a spreadsheet.

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

let minPointType = dataBar.GetMinPointType();

worksheet.GetRange("C1").SetValue("Min Point Type:");
worksheet.GetRange("C2").SetValue(minPointType);