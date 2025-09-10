// This example gets the stop if true setting of color scale formatting.

// How to check if color scale formatting stops evaluation of additional rules.

// Get color scale stop if true setting.

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

let stopIfTrue = colorScale.GetStopIfTrue();

worksheet.GetRange("C1").SetValue("Stop if true:");
worksheet.GetRange("C2").SetValue(stopIfTrue);
