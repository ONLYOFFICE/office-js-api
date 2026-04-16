// Round a number down to the nearest integer in a spreadsheet.

// How to round a number down to the nearest integer in a spreadsheet.

// Use a function to round down a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.INT(2.3));