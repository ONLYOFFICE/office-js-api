// Return the day of the date given in the numerical format, a number from 1 to 31 in a spreadsheet.

// How to get a day from a date in a spreadsheet.

// Use function to get day from provided date in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.DAY("2018/3/16"); 

worksheet.GetRange("C1").SetValue(ans);