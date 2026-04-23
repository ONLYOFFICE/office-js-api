// Extract the month component from a date in a spreadsheet.

// What month does a date represent in a spreadsheet?

// Get the month as a number from a date in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.MONTH("3/16/2018"); 

worksheet.GetRange("C1").SetValue(ans);