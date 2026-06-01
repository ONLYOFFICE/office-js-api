// Read the fill color used for bars that represent negative values in a spreadsheet.

// How do I find out what color is applied to negative data bars in a spreadsheet?

// Confirm the distinct color assigned to bars that display below-zero values in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(-50);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(-25);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let negativeColor = dataBar.GetNegativeBarColor();

worksheet.GetRange("C1").SetValue("Negative Color:");
worksheet.GetRange("C2").SetValue(negativeColor ? "Set" : "None");