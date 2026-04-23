// Convert a right-tail probability into the matching chi-squared critical value in a spreadsheet.

// Identify the threshold where the upper tail of the chi-squared distribution starts in a spreadsheet.

// Establish the boundary point for statistical significance at a given probability level in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CHIDIST(0.4, 10);
worksheet.GetRange("B2").SetValue(ans);