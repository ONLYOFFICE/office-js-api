// Return the right-tailed probability of the chi-squared distribution in a spreadsheet.

// How to return the right-tailed probability of the chi-squared distribution in a spreadsheet.

// Use function to return the right-tailed probability of the chi-squared distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let avg = func.CHIDIST(12, 10);
worksheet.GetRange("B2").SetValue(avg);