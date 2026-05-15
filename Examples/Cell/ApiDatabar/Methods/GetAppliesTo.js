// Find out which cells a bar-style formatting rule is applied to in a spreadsheet.

// How do I check what range is covered by a data bar formatting rule in a spreadsheet?

// Identify the exact cell range targeted by a bar visual rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);

let dataRange = worksheet.GetRange("A2:A4");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let appliesTo = dataBar.GetAppliesTo();

worksheet.GetRange("C1").SetValue("Data bar applies to:");
worksheet.GetRange("C2").SetValue(appliesTo.GetAddress());