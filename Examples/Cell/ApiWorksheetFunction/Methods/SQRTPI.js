// Return the square root of (number * pi) in a spreadsheet.

// How to calculate the square root of a number multiplied by aa constant Pi in a spreadsheet.

// Use a function to get the square root of (number * pi) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SQRTPI(5));