// This example shows how to return the inverse of the (left-tailed) F probability distribution: if p = F.DIST(x,...), then F.INV(p,...) = x.
// How to get the inverse of the (left-tailed) F probability distribution.
// Use function to calculate an inverse of the F probability distribution.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.F_INV(0.01, 6, 4);
oWorksheet.GetRange("B2").SetValue(ans);