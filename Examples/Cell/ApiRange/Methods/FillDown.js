// This example fills the selected range downward from the values in the top row.

// How to copy values from the top row of a range to all rows below.

// Set text, number and formula source values, then fill down to show growing numbers.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B2").SetValue("Alice");
worksheet.GetRange("C2").SetValue(1);
worksheet.GetRange("D2").SetValue("=C2+D1");

let range = worksheet.GetRange("B2:D5");
range.FillDown();
