// This example shows how to return the result of a number raised to a power.

// How to raise a number to a power.

// Use a function to calculate the result after raising a number to the power.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.POWER(23, 4));