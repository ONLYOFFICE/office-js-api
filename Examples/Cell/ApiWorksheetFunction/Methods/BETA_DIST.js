// This example shows how to return the cumulative beta probability density function.

// How to get a result from cumulative beta probability density function.

// Use function to get the cumulative beta probability density function.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.BETA_DIST(0.4, 4, 5, false);
worksheet.GetRange("B2").SetValue(ans);