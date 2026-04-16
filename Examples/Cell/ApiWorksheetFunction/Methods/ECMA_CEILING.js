// Round the number up to the nearest multiple of significance. Negative numbers are rounded towards zero in a spreadsheet.

// How to round up the number in a spreadsheet.

// Use function to round up a number to the nearest multiple of significance in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ECMA_CEILING(1.567, 0.1));