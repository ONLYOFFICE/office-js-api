// Return the left-tailed Student's t-distribution in a spreadsheet.

// How to calculate the left-tailed Student's t-distribution in a spreadsheet.

// Use a function to estimate the Student's t-distribution left-tailed in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.T_DIST(1.5, 10, false);
worksheet.GetRange("B2").SetValue(ans);
