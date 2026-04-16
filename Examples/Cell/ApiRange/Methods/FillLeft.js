// This example fills the selected range to the left from the values in the rightmost column.

// How to copy values from the right column of a range to all columns to the left.

// Set text, number and formula source values, then fill left to show growing numbers.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("E2").SetValue("Alice");
worksheet.GetRange("E3").SetValue(1);
worksheet.GetRange("E4").SetValue("=E3+F4");

let range = worksheet.GetRange("B2:E4");
range.FillLeft();
