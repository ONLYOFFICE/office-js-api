// Control the order in which a data bar formatting rule is evaluated relative to others in a spreadsheet.

// How do I decide which conditional formatting rule takes precedence when multiple rules overlap in a spreadsheet?

// Resolve conflicts between overlapping formatting rules by assigning a specific priority number in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar1 = formatConditions.AddDatabar();
let dataBar2 = formatConditions.AddDatabar();

dataBar2.SetPriority(3);

let priority = dataBar2.GetPriority();

worksheet.GetRange("C1").SetValue("New priority:");
worksheet.GetRange("C2").SetValue(priority);