// Repeat the content of the leftmost column across all columns to the right in a spreadsheet.

// How do I propagate values and formulas rightward through a row range in a spreadsheet?

// Extend data from the first column into every empty column after it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B2").SetValue("Alice");
worksheet.GetRange("B3").SetValue(1);
worksheet.GetRange("B4").SetValue("=B3+A4");

let range = worksheet.GetRange("B2:E4");
range.FillRight();