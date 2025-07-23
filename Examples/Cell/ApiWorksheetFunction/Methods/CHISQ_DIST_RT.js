// This example shows how to return the right-tailed probability of the chi-squared distribution.

// How to return the right-tailed probability of the chi-squared distribution.

// Use function to return the right-tailed probability of the chi-squared distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHISQ_DIST_RT(12, 10));