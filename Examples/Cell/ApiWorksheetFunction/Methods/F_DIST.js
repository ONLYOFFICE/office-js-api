// This example shows how to return the (left-tailed) F probability distribution (degree of diversity) for two data sets.

// How to get the F probability distribution (degree of diversity).

// Use function to calculate a left-tailed F probability distribution.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.F_DIST(10, 6, 4, false);
oWorksheet.GetRange("B2").SetValue(ans);