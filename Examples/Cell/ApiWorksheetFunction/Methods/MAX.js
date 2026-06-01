// Find the largest number in a set of values in a spreadsheet.

// How do I identify the highest sales amount from a list of quarterly results in a spreadsheet?

// Get the maximum value from a collection of numbers in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let max = func.MAX(123, 197, 46, 354, 67, 456);
worksheet.GetRange("C1").SetValue(max);