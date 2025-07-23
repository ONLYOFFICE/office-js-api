// This example shows how to return the confidence interval for a population mean, using a normal distribution.

// How to return the confidence interval for a population mean, using a normal distribution.

// Use function to get the confidence interval for a population mean, using a normal distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CONFIDENCE(0.5, 57, 8);
worksheet.GetRange("B2").SetValue(ans);