// Identify the cell range covered by a color scale formatting rule in a spreadsheet.

// How do I find out which cells a color scale rule is applied to in a spreadsheet?

// Read back the target range of an active color scale rule and display its address in a spreadsheet.

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