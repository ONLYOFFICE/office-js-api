// Return the interest rate per period for a loan or an investment. For example, use 6%/4 for quarterly payments at 6% APR in a spreadsheet.

// How to estimate the interest rate per period for a loan or an investment in a spreadsheet.

// Use a function to get the loan/investment interest rate per period in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RATE(2*12, -500, 10000, 0));