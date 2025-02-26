// This example shows how to return the left-tailed Student's t-distribution.

// How to calculate the left-tailed Student's t-distribution.

// Use a function to estimate the Student's t-distribution left-tailed.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.T_DIST(1.5, 10, false);
oWorksheet.GetRange("B2").SetValue(ans);

