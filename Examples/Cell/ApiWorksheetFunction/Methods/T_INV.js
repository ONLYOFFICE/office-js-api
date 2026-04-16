// Return the left-tailed inverse of the Student's t-distribution in a spreadsheet.

// How to calculate the left-tailed inverse of Student's t-distribution in a spreadsheet.

// Use a function to estimate the Student's t-distribution left-tailed inverse in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.T_INV(0.75, 2);
worksheet.GetRange("B2").SetValue(result);
