// Return a number that is rounded down to the nearest integer or to the nearest multiple of significance. The number is always rounded down regardless of its sign in a spreadsheet.

// How to round a number down to the nearest integer regardless its sign in a spreadsheet.

// Use function to round down a negative/positive number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FLOOR_PRECISE(-6.7, 2));