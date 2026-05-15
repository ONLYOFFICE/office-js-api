// Read where the midpoint axis is placed within a bar formatting rule in a spreadsheet.

// How do I find out the axis position setting of a data bar rule in a spreadsheet?

// Inspect the axis placement to understand how bars are oriented in a spreadsheet.

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

let axisPosition = dataBar.GetAxisPosition();

worksheet.GetRange("C1").SetValue("Axis Position:");
worksheet.GetRange("C2").SetValue(axisPosition);