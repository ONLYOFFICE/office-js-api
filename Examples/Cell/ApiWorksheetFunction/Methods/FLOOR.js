// Round a number down to the nearest multiple of significance in a spreadsheet.

// How to round a number down to the nearest multiple of significance in a spreadsheet.

// Use function to round down in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FLOOR(5.786, 0.7));