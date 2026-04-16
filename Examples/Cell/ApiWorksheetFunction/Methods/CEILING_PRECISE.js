// Return a number that is rounded up to the nearest integer or to the nearest multiple of significance. The number is always rounded up regardless of its sing in a spreadsheet.

// How to round a number up precisely in a spreadsheet.

// Use function to round a negative or positive number up the nearest integer or to the nearest multiple of significance in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CEILING_PRECISE(-6.7, 2));