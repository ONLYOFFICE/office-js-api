// Round a positive number up and negative number down to the nearest odd integer in a spreadsheet.

// How to round a number the nearest odd integer in a spreadsheet.

// Use a function round a negative/positive number the nearest odd integer in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ODD(7.675));