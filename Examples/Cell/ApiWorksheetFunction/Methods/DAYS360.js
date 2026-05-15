// Calculate days between two dates using a 360-day year in a spreadsheet.

// What is the total days between two specific dates using 360-day year in a spreadsheet?

// Count the number of days from one date to another with 360-day months in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.DAYS360("3/31/2018", "4/30/2019", false); 

worksheet.GetRange("C1").SetValue(ans);