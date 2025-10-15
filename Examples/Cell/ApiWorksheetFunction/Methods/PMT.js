// This example shows how to calculate the payment for a loan based on constant payments and a constant interest rate.

// How to return the payment for a loan based on different parameters.

// Use a function to return the payment for a loan.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PMT(0.08/12, 2*12, 10000, 0));