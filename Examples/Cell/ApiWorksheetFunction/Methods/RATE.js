// This example shows how to return the interest rate per period for a loan or an investment. For example, use 6%/4 for quarterly payments at 6% APR.

// How to estimate the interest rate per period for a loan or an investment.

// Use a function to get the loan/investment interest rate per period.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.RATE(2*12, -500, 10000, 0));