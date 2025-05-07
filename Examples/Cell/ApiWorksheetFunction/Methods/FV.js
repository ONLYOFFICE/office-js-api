// This example shows how to return the future value of an investment based on periodic, constant payments and a constant interest rate.

// How to get the future value of an investment.

// Use a function to get future value of an investment based on different parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.FV(0.1/12, 2*12, -500, 10000));