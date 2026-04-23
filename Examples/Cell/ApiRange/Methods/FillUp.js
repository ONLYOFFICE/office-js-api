// Repeat the content of the bottom row across all rows above it in a spreadsheet.

// How do I propagate values and formulas upward through a column range in a spreadsheet?

// Extend data from the last row into every empty row above it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B5").SetValue("Alice");
worksheet.GetRange("C5").SetValue(1);
worksheet.GetRange("D5").SetValue("=C5+D6");

let range = worksheet.GetRange("B2:D5");
range.FillUp();