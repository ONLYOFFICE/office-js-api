// This example shows how to return the inverse of the left-tailed probability of the chi-squared distribution.

// How to return the inverse of the inverse of the left-tailed probability of the chi-squared distribution.

// Use function to return the inverse of the left-tailed probability of the chi-squared distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.CHISQ_INV(0.4, 10);
worksheet.GetRange("B2").SetValue(ans);