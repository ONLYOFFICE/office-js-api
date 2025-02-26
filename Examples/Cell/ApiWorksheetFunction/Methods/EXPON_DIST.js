// This example shows how to return the exponential distribution.

// How to get the exponential distribution.

// Use function to calculate an exponential distribution.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.EXPON_DIST(0.5, 3, false);
oWorksheet.GetRange("B2").SetValue(ans);