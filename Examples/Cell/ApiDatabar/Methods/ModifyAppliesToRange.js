// Expand or change the cells covered by a data bar formatting rule in a spreadsheet.

// How do I move a data bar rule to a different or larger group of cells in a spreadsheet?

// Reassign an existing data bar rule so it targets a new range of cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Original Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

worksheet.GetRange("B1").SetValue("Extended Data");
worksheet.GetRange("B2").SetValue(300);
worksheet.GetRange("B3").SetValue(400);

let originalRange = worksheet.GetRange("A2:A3");
let formatConditions = originalRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let newRange = worksheet.GetRange("A2:B3");
dataBar.ModifyAppliesToRange(newRange);

worksheet.GetRange("D1").SetValue("Data bar now applies to A2:B3");