// This example shows how to return the standard normal distribution (has a mean of zero and a standard deviation of one).

// How to calculate the standard normal distribution.

// Use a function to get the standard normal distribution with a mean = 0 and standard deviation = 1.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NORM_S_DIST(1.33, true));