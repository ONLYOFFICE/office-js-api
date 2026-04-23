// Return the gamma distribution.

// Calculate the probability distribution for gamma-distributed values.

// Determine gamma distribution using GAMMADIST with shape and scale parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMADIST(10, 9, 2, false);
worksheet.GetRange("B2").SetValue(ans);
