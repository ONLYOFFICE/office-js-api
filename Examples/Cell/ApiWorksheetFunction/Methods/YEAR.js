// Return the year of a date, an integer in the range 1900-9999 in a spreadsheet.

// How to return the year of a date in a spreadsheet.

// Use a function to get a year from a date object in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.YEAR("3/16/2018");

worksheet.GetRange("C1").SetValue(ans);