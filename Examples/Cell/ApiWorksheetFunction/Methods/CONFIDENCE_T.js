// This example shows how to return the confidence interval for a population mean, using a Student's t distribution.

// How to return the confidence interval for a population mean, using a Student's t distribution.

// Use function to get the confidence interval for a population mean.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.CONFIDENCE_T(0.5, 57, 8);
oWorksheet.GetRange("B2").SetValue(ans);