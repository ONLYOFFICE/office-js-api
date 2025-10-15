// This example shows how to return the exponential distribution.

// How to get the exponential distribution.

// Use function to calculate an exponential distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.F_DIST(10, 6, 4, false);
worksheet.GetRange("B2").SetValue(ans);