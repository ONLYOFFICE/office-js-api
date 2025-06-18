// This example shows how to return the right-tailed probability of the chi-squared distribution.

// How to return the right-tailed probability of the chi-squared distribution.

// Use function to return the right-tailed probability of the chi-squared distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let avg = func.CHIDIST(12, 10);
worksheet.GetRange("B2").SetValue(avg);