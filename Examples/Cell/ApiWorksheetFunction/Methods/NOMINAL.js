// This example shows how to return the annual nominal interest rate.

// How to calculate the annual nominal interest rate.

// Use a function to get the annual nominal interest rate.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NOMINAL(0.7, 4));