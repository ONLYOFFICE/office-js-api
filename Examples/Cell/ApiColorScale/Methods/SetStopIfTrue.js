// This example sets the stop if true setting of color scale formatting.

// How to control whether color scale formatting stops evaluation of additional rules.

// Set color scale stop if true setting.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let colorScale1 = formatConditions.AddColorScale();
let colorScale2 = formatConditions.AddColorScale();

worksheet.GetRange("C1").SetValue("Stop before:");
worksheet.GetRange("C2").SetValue(colorScale1.GetStopIfTrue());

colorScale1.SetStopIfTrue(true);

worksheet.GetRange("D1").SetValue("Stop after:");
worksheet.GetRange("D2").SetValue(colorScale1.GetStopIfTrue());
