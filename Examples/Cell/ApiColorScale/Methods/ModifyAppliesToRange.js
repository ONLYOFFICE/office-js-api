// This example modifies the range to which color scale formatting applies.

// How to change the target range for color scale conditional formatting.

// Modify color scale range.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let originalRange = worksheet.GetRange("A2:A4");

let formatConditions = originalRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale();

worksheet.GetRange("C1").SetValue("Original range:");
worksheet.GetRange("C2").SetValue(colorScale.GetAppliesTo().GetAddress());

let newRange = worksheet.GetRange("A2:A6");
colorScale.ModifyAppliesToRange(newRange);

worksheet.GetRange("D1").SetValue("Modified range:");
worksheet.GetRange("D2").SetValue(colorScale.GetAppliesTo().GetAddress());
