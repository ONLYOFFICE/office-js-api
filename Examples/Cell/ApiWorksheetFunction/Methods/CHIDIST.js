// This example shows how to return the right-tailed probability of the chi-squared distribution.
// How to return the right-tailed probability of the chi-squared distribution.
// Use function to return the right-tailed probability of the chi-squared distribution.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var avg = oFunction.CHIDIST(12, 10);
oWorksheet.GetRange("B2").SetValue(avg);