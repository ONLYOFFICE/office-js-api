// This example demonstrates setting the negative bar border color of a data bar conditional formatting rule.

// How to change the border color of negative value bars.

// Set the negative bar border color of a data bar conditional formatting rule.

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
