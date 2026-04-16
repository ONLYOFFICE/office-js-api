// Calculate the Poisson distribution in a spreadsheet.

// How to return the Poisson distribution in a spreadsheet.

// Use a function to calculate the Poisson distribution in a spreadsheet.

const worksheet = Api.GetActiveSheet();

//method params
let x = 9;
let mean = 12;
let cumulative = false;

let func = Api.WorksheetFunction;
let ans = func.POISSON_DIST(x, mean, cumulative);

worksheet.GetRange("C1").SetValue(ans);