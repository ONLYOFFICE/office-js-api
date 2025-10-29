// This example gets the range to which color scale formatting applies.

// How to retrieve the target range of color scale conditional formatting.

// Get color scale applied range.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale();

let appliedRange = colorScale.GetAppliesTo();

worksheet.GetRange("C1").SetValue("Color scale applies to:");
worksheet.GetRange("C2").SetValue(appliedRange.GetAddress());
