// This example shows how to calculate the greatest common divisor.

// How to find the greatest common divisor.

// Use a function to calculate the greatest common divisor.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.GCD(28, 16, 878, 800, 1650, 2000));