// This example shows how to return the inverse of the right-tailed probability of the chi-squared distribution.

// How to return the inverse of the right-tailed probability of the chi-squared distribution.

// Use function to return the inverse of the right-tailed probability of the chi-squared distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CHIDIST(0.4, 10);
worksheet.GetRange("B2").SetValue(ans);