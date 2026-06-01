// Calculate negative binomial distribution values in a spreadsheet.

// Analyze probability of failures in repeated trials in a spreadsheet.

// Compute distribution statistics for success and failure scenarios in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NEGBINOM_DIST(6, 32, 0.7, true));