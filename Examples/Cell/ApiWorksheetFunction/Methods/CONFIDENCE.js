// This example shows how to return the confidence interval for a population mean, using a normal distribution.
// How to return the confidence interval for a population mean, using a normal distribution.
// Use function to get the confidence interval for a population mean, using a normal distribution.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.CONFIDENCE(0.5, 57, 8);
oWorksheet.GetRange("B2").SetValue(ans);