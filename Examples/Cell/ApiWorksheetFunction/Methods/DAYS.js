// Calculate how many days exist between two dates in a spreadsheet.

// What is the day count from one date to another in a spreadsheet?

// Measure the elapsed time between dates in days in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.DAYS("3/31/2018", "3/16/2018"); 

worksheet.GetRange("C1").SetValue(ans);