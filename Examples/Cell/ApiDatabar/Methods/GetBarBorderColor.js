// Read the border color applied to data bars in a spreadsheet.

// How do I find out what border color is used on data bars in a spreadsheet?

// Inspect the outline color of data bars to verify their visual style in a spreadsheet.

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

let borderColor = dataBar.GetBarBorderColor();

worksheet.GetRange("C1").SetValue("Border Color:");
worksheet.GetRange("C2").SetValue(borderColor ? "Set" : "None");