// Return the probability of a trial result using a binomial distribution in a spreadsheet.

// How to get a probability of a trial result in a spreadsheet.

// Use function to get a probability of a trial result using binomial distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BINOM_DIST_RANGE(60, 0.75, 45, 50));