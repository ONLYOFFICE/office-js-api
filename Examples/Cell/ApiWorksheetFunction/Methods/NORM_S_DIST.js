// Return the standard normal distribution (has a mean of zero and a standard deviation of one) in a spreadsheet.

// How to calculate the standard normal distribution in a spreadsheet.

// Use a function to get the standard normal distribution with a mean = 0 and standard deviation = 1 in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NORM_S_DIST(1.33, true));