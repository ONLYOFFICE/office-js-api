// Round a number to a specified number of digits in a spreadsheet.

// How to round a number in a spreadsheet.

// Use a function to round a number to indicated number of digits in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ROUND(3.456, 2));