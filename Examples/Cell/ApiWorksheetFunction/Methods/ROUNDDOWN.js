// Round a number down, toward zero in a spreadsheet.

// How to round a number down in a spreadsheet.

// Use a function to round a number towards zero in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ROUNDDOWN(3.456, 0));