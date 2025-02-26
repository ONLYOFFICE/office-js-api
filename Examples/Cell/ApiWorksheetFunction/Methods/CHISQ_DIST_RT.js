// This example shows how to return the right-tailed probability of the chi-squared distribution.

// How to return the right-tailed probability of the chi-squared distribution.

// Use function to return the right-tailed probability of the chi-squared distribution.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CHISQ_DIST_RT(12, 10));