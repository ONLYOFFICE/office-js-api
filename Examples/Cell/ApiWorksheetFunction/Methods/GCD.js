// Calculate the greatest common divisor in a spreadsheet.

// How to find the greatest common divisor in a spreadsheet.

// Use a function to calculate the greatest common divisor in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.GCD(28, 16, 878, 800, 1650, 2000));