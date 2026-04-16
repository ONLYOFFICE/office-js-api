// Return the individual term binomial distribution probability in a spreadsheet.

// How to get an individual term binomial distribution probability in a spreadsheet.

// Use function to get an individual term binomial distribution probability in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BINOM_DIST(50, 67, 0.45, false));