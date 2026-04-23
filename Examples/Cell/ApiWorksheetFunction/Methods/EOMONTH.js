// Find the last day of a month that is a specified number of months away in a spreadsheet.

// How do I get the end date of a month by counting months forward or backward in a spreadsheet?

// Calculate the final date of a month relative to a starting date in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.EOMONTH("3/16/2018", 10); 

worksheet.GetRange("C1").SetValue(ans);