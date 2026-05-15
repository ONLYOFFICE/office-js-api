// Convert a left-tail probability into the matching chi-squared critical value in a spreadsheet.

// Identify the boundary point where cumulative results reach a specified probability level in a spreadsheet.

// Establish the threshold value for statistical tests based on a given tail probability in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CHISQ_INV(0.4, 10);
worksheet.GetRange("B2").SetValue(ans);