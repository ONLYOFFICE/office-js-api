// Return the gamma function value.

// Calculate the gamma function for the given parameter value.

// Determine gamma function result using GAMMA with numeric input.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMA(2.7);
worksheet.GetRange("B2").SetValue(ans);
