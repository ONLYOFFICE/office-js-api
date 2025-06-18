// This example shows how to return the individual term binomial distribution probability.

// How to get an individual term binomial distribution probability.

// Use function to get an individual term binomial distribution probability.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.BINOM_DIST(50, 67, 0.45, false));