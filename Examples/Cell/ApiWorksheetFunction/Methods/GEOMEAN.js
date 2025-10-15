// This example shows how to calculate the geometric mean of positive numeric data.

// How to find the geometric mean.

// Use a function to calculate the geometric mean of positive numeric data.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GEOMEAN(28, 16, 878, 800, 1650, 2000);
worksheet.GetRange("B2").SetValue(ans);

