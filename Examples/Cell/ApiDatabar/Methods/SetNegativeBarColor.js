// Assign a distinct color to data bars that represent negative values in a spreadsheet.

// How do I make negative data bars appear in a different color from positive ones in a spreadsheet?

// Highlight cells with negative numbers by giving their data bars a contrasting color in a spreadsheet.

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

worksheet.GetRange("C1").SetValue("Before:");
worksheet.GetRange("C2").SetValue(dataBar.GetNegativeBarColor() ? "Set" : "None");

let negativeColor = Api.CreateColorFromRGB(255, 0, 0);
dataBar.SetNegativeBarColor(negativeColor);

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetNegativeBarColor() ? "Set" : "None");