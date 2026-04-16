// Return the second, a number from 0 to 59 in a spreadsheet.

// How to get seconds from time in a spreadsheet.

// Use a function to return seconds from time object in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.SECOND("16:39:35"); 

worksheet.GetRange("C1").SetValue(ans);