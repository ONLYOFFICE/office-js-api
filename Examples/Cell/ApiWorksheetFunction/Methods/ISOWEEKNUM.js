// Get the ISO week number for a date in a spreadsheet.

// How do I find the week number using the ISO standard in a spreadsheet?

// Use a function to convert dates to their corresponding ISO week numbers in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.ISOWEEKNUM("9/1/2017"); 

worksheet.GetRange("C1").SetValue(ans);