// Find the monthly payment amount needed to repay a loan in a spreadsheet.

// How do I calculate what I need to pay each month on a loan in a spreadsheet?

// Determine the regular payment required given an interest rate and loan period in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PMT(0.08/12, 2*12, 10000, 0));