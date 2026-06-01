// Find the t-value for a given two-tail probability in a spreadsheet.

// How do I find the critical t-value for a two-tailed test in a spreadsheet?

// Get the inverse of the two-tailed t-distribution for hypothesis testing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.T_INV_2T(0.5, 10));