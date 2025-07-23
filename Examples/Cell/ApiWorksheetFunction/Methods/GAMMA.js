// This example shows how to return the gamma function value.

// How to calculate the gamma function value.

// Use a function to get the result from a gamma function value.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMA(2.7);
worksheet.GetRange("B2").SetValue(ans);

