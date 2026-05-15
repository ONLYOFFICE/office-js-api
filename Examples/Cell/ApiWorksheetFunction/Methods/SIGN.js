// Return the sign of a number: 1 if the number is positive, 0 if the number is zero, or -1 if the number is negative in a spreadsheet.

// Determine the sign of a number using the SIGN function.

// Apply the function to display the sign value in a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SIGN(12));