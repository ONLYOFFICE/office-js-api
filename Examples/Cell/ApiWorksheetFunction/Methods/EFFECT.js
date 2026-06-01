// Calculate the effective annual interest rate from a nominal interest rate in a spreadsheet.

// How do I find the true annual interest rate for an investment in a spreadsheet?

// Convert a nominal interest rate to its effective annual equivalent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EFFECT(0.57, 4));