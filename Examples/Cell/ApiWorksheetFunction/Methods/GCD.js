// Find the greatest common divisor of multiple numbers in a spreadsheet.

// How do I determine the largest number that divides all my values evenly in a spreadsheet?

// Get the highest common factor for a set of integers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.GCD(28, 16, 878, 800, 1650, 2000));