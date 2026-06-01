// Remove a bar-style visual rule from a range of cells in a spreadsheet.

// How do I delete a data bar formatting rule applied to a cell range in a spreadsheet?

// Clear bar-based conditional formatting so a range returns to its plain appearance in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);

let dataRange = worksheet.GetRange("A2:A4");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

worksheet.GetRange("C1").SetValue("Before Delete: Has formatting");

dataBar.Delete();

worksheet.GetRange("C2").SetValue("After Delete: Formatting removed");