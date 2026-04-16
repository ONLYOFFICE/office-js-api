// Return the ISO week number in the year for a given date in a spreadsheet.

// How to get the ISO week number in a spreadsheet.

// Use a function to get an ISO week number in the year in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.ISOWEEKNUM("9/1/2017"); 

worksheet.GetRange("C1").SetValue(ans);