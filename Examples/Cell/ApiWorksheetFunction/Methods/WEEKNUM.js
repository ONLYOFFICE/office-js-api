// Return a number from 1 to 7 identifying the day of the week of the specified date in a spreadsheet.

// How to return a weekday in a spreadsheet.

// Use a function to get a weekday using numbers in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.WEEKNUM("11/5/2018", 2); 

worksheet.GetRange("C1").SetValue(ans);