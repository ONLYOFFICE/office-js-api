// Round a positive number up and negative number down to the nearest even integer in a spreadsheet.

// Round numbers to the nearest even integer.

// Apply EVEN function to round positive and negative numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EVEN(15.67));