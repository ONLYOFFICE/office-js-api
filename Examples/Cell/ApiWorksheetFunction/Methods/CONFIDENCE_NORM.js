// Return the confidence interval for a population mean, using a normal distribution in a spreadsheet.

// How to return the confidence interval for a population mean, using a normal distribution in a spreadsheet.

// Use function to confidence interval for a population mean in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CONFIDENCE_NORM(0.5, 57, 8);
worksheet.GetRange("B2").SetValue(ans);