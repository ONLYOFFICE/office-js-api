// Return the two-tailed inverse of the Student's t-distribution in a spreadsheet.

// How to calculate the two-tailed inverse of Student's t-distribution in a spreadsheet.

// Use a function to estimate the Student's t-distribution two-tailed inverse in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.T_INV_2T(0.5, 10));