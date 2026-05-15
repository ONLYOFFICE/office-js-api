// Round a number up to the nearest specified multiple in a spreadsheet.

// How do I round numbers to the nearest increment in a spreadsheet?

// Increase values to align with a specific rounding factor in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ECMA_CEILING(1.567, 0.1));