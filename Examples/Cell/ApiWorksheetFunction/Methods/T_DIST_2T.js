// Return the two-tailed Student's t-distribution in a spreadsheet.

// How to calculate the two-tailed Student's t-distribution in a spreadsheet.

// Use a function to estimate the Student's t-distribution right-tailed in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.T_DIST_2T(1.5, 10));