// This example shows how to return the two-tailed inverse of the Student's t-distribution.

// How to calculate the two-tailed inverse of Student's t-distribution.

// Use a function to estimate the Student's t-distribution two-tailed inverse.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.T_INV_2T(0.5, 10));