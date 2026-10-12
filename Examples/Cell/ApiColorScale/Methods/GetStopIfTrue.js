// Check whether a color scale rule prevents the lower priority rules from being applied in a spreadsheet.

// How do I find out if a color scale rule stops the evaluation of the other rules in a spreadsheet?

// Read the "stop if true" flag of a color gradient rule in a spreadsheet.

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

worksheet.GetRange("C1").SetValue("Stop if true:");
worksheet.GetRange("C2").SetValue(colorScale.GetStopIfTrue() ? "Yes" : "No");