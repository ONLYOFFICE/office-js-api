// This example demonstrates modifying the range to which a data bar formatting rule applies.

// How to change the range that a data bar conditional formatting affects.

// Modify the range to which the data bar formatting rule applies.

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
