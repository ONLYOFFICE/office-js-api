// This example shows how to return the effective annual interest rate.

// How to get an effective annual interest rate.

// Use function to get effective annual interest rate.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EFFECT(0.57, 4));