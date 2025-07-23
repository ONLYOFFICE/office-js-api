// This example shows how to return the payment on the principal for a given investment based on periodic, constant payments and a constant interest rate.

// How to return the payment on the principal for a given investment.

// Use a function to calculate the payment on the principal for a given investment based on parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PPMT(0.1/12, 1, 2*12, 2000, 0));