// Round a number to the specified number of decimals and return the result as text with or without commas in a spreadsheet.

// How to round a number with parameters in a spreadsheet.

// Use function to round a number with specified decimal points in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FIXED(1234.9, 1, false));