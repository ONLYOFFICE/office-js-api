// Calculate the probability using the Poisson distribution model in a spreadsheet.

// How do I use the Poisson distribution to find event probabilities in a spreadsheet?

// Get the likelihood of a certain number of events occurring in a fixed timeframe in a spreadsheet.

const worksheet = Api.GetActiveSheet();

//method params
let x = 9;
let mean = 12;
let cumulative = false;

let func = Api.WorksheetFunction;
let ans = func.POISSON(x, mean, cumulative);

worksheet.GetRange("C1").SetValue(ans);