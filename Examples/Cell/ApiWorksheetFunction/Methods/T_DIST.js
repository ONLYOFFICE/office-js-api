// This example shows how to return the left-tailed Student's t-distribution.

// How to calculate the left-tailed Student's t-distribution.

// Use a function to estimate the Student's t-distribution left-tailed.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.T_DIST(1.5, 10, false);
worksheet.GetRange("B2").SetValue(ans);

