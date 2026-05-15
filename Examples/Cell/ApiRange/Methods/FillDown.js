// Repeat the content of the top row across all rows below it in a spreadsheet.

// How do I propagate values and formulas downward through a column range in a spreadsheet?

// Extend data from the first row into every empty row beneath it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B2").SetValue("Alice");
worksheet.GetRange("C2").SetValue(1);
worksheet.GetRange("D2").SetValue("=C2+D1");

let range = worksheet.GetRange("B2:D5");
range.FillDown();