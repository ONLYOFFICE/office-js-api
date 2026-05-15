// Assign a custom border color to the bars that represent negative values in a spreadsheet.

// How do I change the outline color of negative-value bars on a data bar rule in a spreadsheet?

// Distinguish negative bars visually by giving their borders a specific color in a spreadsheet.

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
worksheet.GetRange("C2").SetValue(dataBar.GetNegativeBorderColor() ? "Set" : "None");

let negativeBorderColor = Api.CreateColorFromRGB(200, 0, 0);
dataBar.SetNegativeBorderColor(negativeBorderColor);

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetNegativeBorderColor() ? "Set" : "None");