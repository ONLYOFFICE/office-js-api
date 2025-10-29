// This example demonstrates getting the negative bar border color from a data bar conditional formatting rule.

// How to retrieve the border color of negative value bars.

// Get the negative bar border color of a data bar conditional formatting rule.

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

let negativeBorderColor = dataBar.GetNegativeBorderColor();

worksheet.GetRange("C1").SetValue("Negative Border:");
worksheet.GetRange("C2").SetValue(negativeBorderColor ? "Set" : "None");
