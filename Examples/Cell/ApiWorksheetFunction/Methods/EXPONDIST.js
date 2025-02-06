// This example shows how to return the exponential distribution.
// How to get the exponential distribution.
// Use function to calculate an exponential distribution.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.F_DIST(10, 6, 4, false);
oWorksheet.GetRange("B2").SetValue(ans);