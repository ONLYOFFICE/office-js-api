// Round a number to a specific decimal place in a spreadsheet.

// How do I round numbers to a certain number of digits in a spreadsheet?

// Adjust a number's precision by rounding it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ROUND(3.456, 2));