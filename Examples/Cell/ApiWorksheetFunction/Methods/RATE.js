// This example shows how to return the interest rate per period for a loan or an investment. For example, use 6%/4 for quarterly payments at 6% APR.

// How to estimate the interest rate per period for a loan or an investment.

// Use a function to get the loan/investment interest rate per period.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.RATE(2*12, -500, 10000, 0));