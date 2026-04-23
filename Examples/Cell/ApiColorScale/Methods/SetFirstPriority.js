// Move a color gradient rule to the top of the evaluation order in a spreadsheet.

// How do I make a color scale rule take precedence over all other formatting rules in a spreadsheet?

// Promote a color gradient condition so it is always evaluated before any competing rules in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let topRule = formatConditions.Add("xlTop10");
let colorScale = formatConditions.AddColorScale();

worksheet.GetRange("C1").SetValue("Priority before:");
worksheet.GetRange("C2").SetValue(colorScale.GetPriority());

colorScale.SetFirstPriority();

worksheet.GetRange("D1").SetValue("Priority after:");
worksheet.GetRange("D2").SetValue(colorScale.GetPriority());