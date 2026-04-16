// Round a number up, to the nearest integer or to the nearest multiple of significance in a spreadsheet.

// How to round a number up in a spreadsheet.

// Use function to round a number up the nearest integer or to the nearest multiple of significance in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CEILING_MATH(-5.5, 2, 1));