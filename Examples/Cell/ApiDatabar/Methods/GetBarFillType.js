// This example demonstrates getting the bar fill type from a data bar conditional formatting rule.

// How to check the fill type setting of a data bar.

// Get the bar fill type of a data bar conditional formatting rule.

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

let fillType = dataBar.GetBarFillType();

worksheet.GetRange("C1").SetValue("Fill Type:");
worksheet.GetRange("C2").SetValue(fillType);
