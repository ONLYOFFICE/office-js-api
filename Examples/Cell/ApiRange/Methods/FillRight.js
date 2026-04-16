// Fill the selected range to the right from the values in the leftmost column in a spreadsheet.

// How to copy values from the left column of a range to all columns to the right in a spreadsheet.

// Set text, number and formula source values, then fill right to show growing numbers.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B2").SetValue("Alice");
worksheet.GetRange("B3").SetValue(1);
worksheet.GetRange("B4").SetValue("=B3+A4");

let range = worksheet.GetRange("B2:E4");
range.FillRight();