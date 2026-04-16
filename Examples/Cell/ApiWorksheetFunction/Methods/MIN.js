// Return the smallest number in a set of values. Ignores logical values and text in a spreadsheet.

// How to get a minimum number from a list of numbers in a spreadsheet.

// Use a function to find a minimum from a list in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let min = func.MIN(123, 197, 46, 345, 67, 456);
worksheet.GetRange("C1").SetValue(min);