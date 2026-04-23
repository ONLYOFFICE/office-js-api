// Convert an upper-tail probability into the matching chi-squared critical value in a spreadsheet.

// Determine the boundary value for statistical significance at a given right-tail probability in a spreadsheet.

// Find the threshold point used to evaluate extreme results in hypothesis testing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CHISQ_INV_RT(0.4, 10);
worksheet.GetRange("B2").SetValue(ans);