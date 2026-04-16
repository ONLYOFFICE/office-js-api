// Round a positive number up and negative number down to the nearest even integer in a spreadsheet.

// How to round up a number in a spreadsheet.

// Use function to round up positive/negative numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EVEN(15.67));