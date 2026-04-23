// Round a number down to the nearest integer or multiple in a spreadsheet.

// How do I round down a negative or positive number in a spreadsheet?

// Decrease a number to the nearest whole number or custom increment in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FLOOR_MATH(-5.5, 2, 1));