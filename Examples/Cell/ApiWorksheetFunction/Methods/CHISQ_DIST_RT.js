// Find what percentage of results exceed a certain value in a chi-squared distribution in a spreadsheet.

// Determine the upper tail probability for comparing observed versus expected frequencies in a spreadsheet.

// Assess how unusual a chi-squared test result is by measuring its right-tail probability in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHISQ_DIST_RT(12, 10));