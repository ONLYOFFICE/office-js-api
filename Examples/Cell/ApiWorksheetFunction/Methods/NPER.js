// This example shows how to return the number of periods for an investment based on periodic, constant payments and a constant interest rate.

// How to get the number of periods for an investment.

// Use a function to get the number of periods for an investment based on different parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NPER(0.1/12, -500, 10000, 0));