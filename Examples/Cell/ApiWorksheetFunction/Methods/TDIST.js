// Return the Student's t-distribution in a spreadsheet.

// How to calculate a Student's t-distribution in a spreadsheet.

// Use a function to estimate a Student's t-distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.TDIST(1.5, 10, 1);
worksheet.GetRange("B2").SetValue(ans);
