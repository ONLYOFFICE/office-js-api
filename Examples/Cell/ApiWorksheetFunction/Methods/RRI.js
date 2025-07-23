// This example shows how to return an equivalent interest rate for the growth of an investment.

// How to get an investment growth interest rate.

// Use a function to an equivalent interest rate for the increase of an investment.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RRI(12, 10000, 20000));