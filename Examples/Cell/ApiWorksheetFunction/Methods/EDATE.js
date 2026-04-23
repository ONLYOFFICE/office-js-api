// Calculate a date that is a specified number of months before or after a given date in a spreadsheet.

// How do I find a date by adding or subtracting months from a starting date in a spreadsheet?

// Shift a date forward or backward by a number of months in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.EDATE("3/16/2018", 7); 

worksheet.GetRange("C1").SetValue(ans);