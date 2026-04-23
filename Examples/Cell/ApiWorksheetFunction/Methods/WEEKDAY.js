// Get the day of the week as a number from 1 to 7 for a given date in a spreadsheet.

// How do I identify which day of the week a specific date falls on in a spreadsheet?

// Determine the numeric weekday value for any date in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.WEEKDAY("11/5/2018", 2); 

worksheet.GetRange("C1").SetValue(ans);