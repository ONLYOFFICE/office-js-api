// Get the hour as a number from 0 (12:00 A.M.) to 23 (11:00 P.M.) in a spreadsheet.

// How to get an hour in a spreadsheet.

// Use a function to get an hour from a time in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.HOUR("4:17 pm"); 

worksheet.GetRange("C1").SetValue(ans);