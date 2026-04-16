// Return the month, a number from 1 (January) to 12 (December) in a spreadsheet.

// How to get the month from a date in a spreadsheet.

// Use a function to get a month in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.MONTH("3/16/2018"); 

worksheet.GetRange("C1").SetValue(ans);