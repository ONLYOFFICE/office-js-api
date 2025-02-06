// This example shows how to return the cumulative beta probability density function.
// How to get a result from cumulative beta probability density function.
// Use function to get the cumulative beta probability density function.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.BETA_DIST(0.4, 4, 5, false);
oWorksheet.GetRange("B2").SetValue(ans);