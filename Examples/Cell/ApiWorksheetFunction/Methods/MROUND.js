// Round a number to the nearest multiple of another value in a spreadsheet.

// What is a number rounded to a specific multiple in a spreadsheet?

// Adjust a value to the closest increment in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MROUND(14.35, 0.4));