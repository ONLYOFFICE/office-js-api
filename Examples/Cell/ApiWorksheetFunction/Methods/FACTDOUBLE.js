// Return the double factorial of a number in a spreadsheet.

// Calculate the double factorial of a number.

// Apply FACTDOUBLE function to get the double factorial value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FACTDOUBLE(123));