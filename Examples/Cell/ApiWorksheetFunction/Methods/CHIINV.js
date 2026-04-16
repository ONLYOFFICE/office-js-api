// Return the inverse of the right-tailed probability of the chi-squared distribution in a spreadsheet.

// How to return the inverse of the right-tailed probability of the chi-squared distribution in a spreadsheet.

// Use function to return the inverse of the right-tailed probability of the chi-squared distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CHIDIST(0.4, 10);
worksheet.GetRange("B2").SetValue(ans);