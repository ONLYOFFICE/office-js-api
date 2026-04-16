// Return a number that is rounded up to the nearest integer or to the nearest multiple of significance regardless of the sign of the number. The number is always rounded up regardless of its sing in a spreadsheet.

// How to round up a number to the nearest integer in a spreadsheet.

// Use a function to round up a number to the nearest integer in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISO_CEILING(-6.7, 2));