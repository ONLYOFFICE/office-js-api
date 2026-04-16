// Fill the selected range upward from the values in the bottom row in a spreadsheet.

// How to copy values from the bottom row of a range to all rows above in a spreadsheet.

// Set text, number and formula source values, then fill up to show growing numbers.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B5").SetValue("Alice");
worksheet.GetRange("C5").SetValue(1);
worksheet.GetRange("D5").SetValue("=C5+D6");

let range = worksheet.GetRange("B2:D5");
range.FillUp();