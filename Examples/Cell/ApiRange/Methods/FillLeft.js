// Repeat the content of the rightmost column across all columns to the left in a spreadsheet.

// How do I propagate values and formulas leftward through a row range in a spreadsheet?

// Extend data from the last column into every empty column before it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("E2").SetValue("Alice");
worksheet.GetRange("E3").SetValue(1);
worksheet.GetRange("E4").SetValue("=E3+F4");

let range = worksheet.GetRange("B2:E4");
range.FillLeft();