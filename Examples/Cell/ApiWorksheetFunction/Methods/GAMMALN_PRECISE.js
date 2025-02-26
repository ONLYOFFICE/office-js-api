// This example shows how to return the natural logarithm of the gamma function.

// How to calculate the natural logarithm of the gamma function.

// Use a function to calculate the natural logarithm of the gamma function value.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.GAMMALN_PRECISE(0.5);
oWorksheet.GetRange("B2").SetValue(ans);

