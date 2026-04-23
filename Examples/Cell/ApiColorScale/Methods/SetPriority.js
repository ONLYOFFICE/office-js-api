// Assign a specific position in the evaluation order to a color gradient rule in a spreadsheet.

// How do I place a color scale rule at an exact rank among all formatting rules in a spreadsheet?

// Reorder a color gradient condition by giving it a precise priority number in a spreadsheet.

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

worksheet.GetRange("C1").SetValue("Priority before:");
worksheet.GetRange("C2").SetValue(colorScale1.GetPriority());

colorScale1.SetPriority(3);

worksheet.GetRange("D1").SetValue("Priority after:");
worksheet.GetRange("D2").SetValue(colorScale1.GetPriority());