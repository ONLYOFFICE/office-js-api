// Delete the values from a cell range while keeping its formatting intact in a spreadsheet.

// How do I remove cell data without touching the styling in a spreadsheet?

// Wipe only the text and numbers from selected cells so their appearance stays unchanged in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:B1").SetValue("Example text");
worksheet.GetRange("A1:B1").SetBold(true);
worksheet.GetRange("A1:B1").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
let range = worksheet.GetRange("A1");
range.ClearContents();
worksheet.GetRange("A2").SetValue("Result is contents cleared for A1 cell, its bold font and fill color kept.");