// Round a number up to the nearest multiple of a specified significance in a spreadsheet.

// How do I round up numbers following the ISO standard in a spreadsheet?

// Use a function to round negative and positive numbers consistently upward in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISO_CEILING(-6.7, 2));