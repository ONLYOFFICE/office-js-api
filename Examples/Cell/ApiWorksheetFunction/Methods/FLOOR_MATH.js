// Round a number down, to the nearest integer or to the nearest multiple of significance in a spreadsheet.

// How to round a number down to the nearest integer in a spreadsheet.

// Use function to round down a number with specified decimal points in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FLOOR_MATH(-5.5, 2, 1));