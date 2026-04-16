// Truncate a number to an integer by removing the decimal, or fractional, part of the number in a spreadsheet.

// How to truncate a number to an integer in a spreadsheet.

// Use a function to truncate a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TRUNC(3.14159265, 5));