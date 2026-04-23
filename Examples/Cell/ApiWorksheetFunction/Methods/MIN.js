// Find the smallest number in a list of values in a spreadsheet.

// What is the minimum number in a set in a spreadsheet?

// Identify the lowest numeric value from a range in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let min = func.MIN(123, 197, 46, 345, 67, 456);
worksheet.GetRange("C1").SetValue(min);