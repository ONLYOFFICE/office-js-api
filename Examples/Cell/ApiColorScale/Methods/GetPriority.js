// This example gets the priority value of color scale formatting rule.

// How to retrieve the evaluation priority of color scale conditional formatting.

// Get color scale priority.

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

let priority = colorScale.GetPriority();

worksheet.GetRange("C1").SetValue("Color scale priority:");
worksheet.GetRange("C2").SetValue(priority);
