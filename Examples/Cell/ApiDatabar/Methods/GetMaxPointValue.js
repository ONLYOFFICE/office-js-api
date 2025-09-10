// This example demonstrates getting the maximum point value from a data bar conditional formatting rule.

// How to retrieve the value of the maximum condition.

// Get the maximum point value of a data bar conditional formatting rule.

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

let maxPointValue = dataBar.GetMaxPointValue();

worksheet.GetRange("C1").SetValue("Max Point Value:");
worksheet.GetRange("C2").SetValue(maxPointValue || "Auto");
