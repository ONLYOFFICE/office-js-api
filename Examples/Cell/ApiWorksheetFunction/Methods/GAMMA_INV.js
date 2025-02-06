// This example shows how to return the inverse of the gamma cumulative distribution: if p = GAMMA.DIST(x,...), then GAMMA.INV(p,...) = x.
// How to calculate the inverse of the gamma cumulative distribution.
// Use a function to get the inverse of the gamma cumulative distribution.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.GAMMA_INV(0.4, 9, 2);
oWorksheet.GetRange("B2").SetValue(ans);

