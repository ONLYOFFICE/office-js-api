// This example shows how to return the (right-tailed) F probability distribution (degree of diversity) for two data sets.
// How to get the F probability distribution.
// Use function to calculate a right-tailed F probability distribution.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.F_DIST_RT(10, 6, 4);
oWorksheet.GetRange("B2").SetValue(ans);