// This example shows how to return the confidence interval for a population mean, using a Student's t distribution.

// How to return the confidence interval for a population mean, using a Student's t distribution.

// Use function to get the confidence interval for a population mean.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CONFIDENCE_T(0.5, 57, 8);
worksheet.GetRange("B2").SetValue(ans);