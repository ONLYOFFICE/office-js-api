// Calculate cumulative or individual binomial distribution probability in a spreadsheet.

// How do I determine the chance of successes in a series of repeated attempts in a spreadsheet?

// Evaluate the probability of reaching a target number of positive outcomes in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BINOM_DIST(50, 67, 0.45, false));