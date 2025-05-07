// This example shows how to return the two-tailed Student's t-distribution.

// How to calculate the two-tailed Student's t-distribution.

// Use a function to estimate the Student's t-distribution right-tailed.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.T_DIST_2T(1.5, 10));