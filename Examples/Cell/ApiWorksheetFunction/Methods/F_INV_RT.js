// This example shows how to return the inverse of the (right-tailed) F probability distribution: if p = F.DIST.RT(x,...), then F.INV.RT(p,...) = x.
// How to get the inverse of the (right-tailed) F probability distribution.
// Use function to calculate an inverse of the F probability distribution.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.F_INV_RT(0.01, 6, 4));