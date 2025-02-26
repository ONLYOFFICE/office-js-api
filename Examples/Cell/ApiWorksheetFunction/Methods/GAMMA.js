// This example shows how to return the gamma function value.

// How to calculate the gamma function value.

// Use a function to get the result from a gamma function value.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.GAMMA(2.7);
oWorksheet.GetRange("B2").SetValue(ans);

