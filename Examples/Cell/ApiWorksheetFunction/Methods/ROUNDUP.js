// Round a number up, away from zero in a spreadsheet.

// How to round a number up in a spreadsheet.

// Use a function to round a number away from zero in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ROUNDUP(3.456, 0));