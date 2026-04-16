// Return the largest value in a set of values. Ignores logical values and text in a spreadsheet.

// How to get a maximum number from a list of numbers in a spreadsheet.

// Use a function to find a maximum from a list in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let max = func.MAX(123, 197, 46, 354, 67, 456);
worksheet.GetRange("C1").SetValue(max);