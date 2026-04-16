// Return the double factorial of a number in a spreadsheet.

// How to calculate a double factorial in a spreadsheet.

// Use function to calculate the double factorial of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FACTDOUBLE(123));