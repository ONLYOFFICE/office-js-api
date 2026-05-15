// Round a number down to the nearest integer in a spreadsheet.

// How do I round down a decimal number in a spreadsheet?

// Truncate decimal places from a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.INT(2.3));