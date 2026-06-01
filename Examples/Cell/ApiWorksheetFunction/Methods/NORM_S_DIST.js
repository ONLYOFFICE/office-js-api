// Calculate the standard normal distribution for a given value in a spreadsheet.

// How do I compute the standard normal distribution in a spreadsheet?

// Find the probability of a value in a standard normal distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NORM_S_DIST(1.33, true));