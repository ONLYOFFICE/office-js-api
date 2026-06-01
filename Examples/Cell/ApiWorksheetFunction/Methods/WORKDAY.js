// Find the date that is a specified number of workdays before or after a given date in a spreadsheet.

// How do I calculate a new date by adding or subtracting workdays in a spreadsheet?

// Determine a future or past workday date based on a number of working days in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.WORKDAY("12/7/1981", 56); 

worksheet.GetRange("C1").SetValue(ans);