// Read the fill color used for data bars in a spreadsheet.

// How do I find out what color is applied to data bars in a spreadsheet?

// Check the color of data bars to confirm their appearance in a spreadsheet.

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

let barColor = dataBar.GetBarColor();

worksheet.GetRange("C1").SetValue("Has Bar Color:");
worksheet.GetRange("C2").SetValue(barColor ? "Yes" : "No");