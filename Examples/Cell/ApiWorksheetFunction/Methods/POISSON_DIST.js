// Calculate event probability using the Poisson statistical distribution in a spreadsheet.

// How do I find the probability of events occurring at a given rate in a spreadsheet?

// Determine cumulative or individual event probabilities from a Poisson distribution in a spreadsheet.

const worksheet = Api.GetActiveSheet();

//method params
let x = 9;
let mean = 12;
let cumulative = false;

let func = Api.WorksheetFunction;
let ans = func.POISSON_DIST(x, mean, cumulative);

worksheet.GetRange("C1").SetValue(ans);