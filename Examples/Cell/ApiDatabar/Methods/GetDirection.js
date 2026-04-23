// Read the growth direction of data bars in a spreadsheet.

// How do I find out which direction data bars grow toward in a spreadsheet?

// Confirm whether data bars expand left-to-right or right-to-left in a spreadsheet.

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

let direction = dataBar.GetDirection();

worksheet.GetRange("C1").SetValue("Direction:");
worksheet.GetRange("C2").SetValue(direction);