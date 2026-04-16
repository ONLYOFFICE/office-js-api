// Calculate the payment for a loan based on constant payments and a constant interest rate in a spreadsheet.

// How to return the payment for a loan based on different parameters in a spreadsheet.

// Use a function to return the payment for a loan in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PMT(0.08/12, 2*12, 10000, 0));