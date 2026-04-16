// Return the right-tailed probability of the chi-squared distribution in a spreadsheet.

// How to return the right-tailed probability of the chi-squared distribution in a spreadsheet.

// Use function to return the right-tailed probability of the chi-squared distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHISQ_DIST_RT(12, 10));