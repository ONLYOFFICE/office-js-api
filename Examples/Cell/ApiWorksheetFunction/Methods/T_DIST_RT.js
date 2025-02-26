// This example shows how to return the right-tailed Student's t-distribution.

// How to calculate the right-tailed Student's t-distribution.

// Use a function to estimate the Student's t-distribution right-tailed.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.T_DIST_RT(1.5, 10));