// Return the minute, a number from 0 to 59 in a spreadsheet.

// How to get a minute from a time in a spreadsheet.

// Use a function to get minutes from a time object in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.MINUTE("4:25 pm"); 

worksheet.GetRange("C1").SetValue(ans);