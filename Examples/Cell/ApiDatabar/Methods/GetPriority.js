// Read the evaluation order of a data bar rule among other formatting rules in a spreadsheet.

// How do I check which priority a data bar rule has when multiple formatting rules overlap in a spreadsheet?

// Confirm the position at which a data bar rule is evaluated relative to other rules in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let priority = dataBar.GetPriority();

worksheet.GetRange("C1").SetValue("Data bar priority:");
worksheet.GetRange("C2").SetValue(priority);