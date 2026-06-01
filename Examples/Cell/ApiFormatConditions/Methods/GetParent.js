// Find the cell range that owns a set of formatting rules in a spreadsheet.

// How do I identify which cells a group of highlight conditions belongs to in a spreadsheet?

// Trace formatting rules back to the range they were applied to in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sample Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(45);
worksheet.GetRange("A4").SetValue(75);
worksheet.GetRange("A5").SetValue(25);
worksheet.GetRange("A6").SetValue(90);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

formatConditions.AddDatabar();

let parentRange = formatConditions.GetParent();

worksheet.GetRange("B1").SetValue("Parent: " + parentRange.GetAddress());