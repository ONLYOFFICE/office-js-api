// This example shows how to return the inverse of the right-tailed probability of the chi-squared distribution.

// How to return the inverse of the right-tailed probability of the chi-squared distribution.

// Use function to return the inverse of the right-tailed probability of the chi-squared distribution.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.CHISQ_INV_RT(0.4, 10);
oWorksheet.GetRange("B2").SetValue(ans);