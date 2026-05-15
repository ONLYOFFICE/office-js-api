// Round a number down to the nearest multiple of a specified value in a spreadsheet.

// How do I round a number down to a specific increment in a spreadsheet?

// Decrease a number to the nearest multiple of a given significance in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FLOOR(5.786, 0.7));