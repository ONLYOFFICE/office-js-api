// Move a data bar formatting rule to the bottom of the evaluation order in a spreadsheet.

// How do I make a data bar rule evaluate after all other formatting rules in a spreadsheet?

// Defer a data bar rule so it only applies when no higher-priority rule already matches in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Priority Test");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar1 = formatConditions.AddDatabar();
let dataBar2 = formatConditions.AddDatabar();

dataBar1.SetLastPriority();

let priority = dataBar1.GetPriority();

worksheet.GetRange("C1").SetValue("Data bar priority:");
worksheet.GetRange("C2").SetValue(priority);