// Return the inverse of the left-tailed probability of the chi-squared distribution in a spreadsheet.

// How to return the inverse of the inverse of the left-tailed probability of the chi-squared distribution in a spreadsheet.

// Use function to return the inverse of the left-tailed probability of the chi-squared distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CHISQ_INV(0.4, 10);
worksheet.GetRange("B2").SetValue(ans);