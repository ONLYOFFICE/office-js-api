// This example shows how to return the confidence interval for a population mean, using a normal distribution.

// How to return the confidence interval for a population mean, using a normal distribution.

// Use function to confidence interval for a population mean.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CONFIDENCE_NORM(0.5, 57, 8);
worksheet.GetRange("B2").SetValue(ans);