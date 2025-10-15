// This example shows how to return the left-tailed probability of the chi-squared distribution.

// How to return the left-tailed probability of the chi-squared distribution.

// Use function to return the left-tailed probability of the chi-squared distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHISQ_DIST(2, 3, false));