// Apply the Fisher transformation to a correlation value in a spreadsheet.

// How do I transform a correlation coefficient for analysis in a spreadsheet?

// Convert a correlation value into its Fisher transformation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FISHER(0.56);
worksheet.GetRange("B2").SetValue(ans);

