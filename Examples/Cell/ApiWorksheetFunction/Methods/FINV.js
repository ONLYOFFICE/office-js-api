// This example shows how to find the inverse of the (right-tailed) F probability distribution: if p = FDIST(x,...), then FINV(p,...) = x.
// How to get an inverse of the (right-tailed) F probability distribution.
// Use function to find out a F probability distribution.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.FINV(0.01, 6, 4);
oWorksheet.GetRange("B2").SetValue(ans);