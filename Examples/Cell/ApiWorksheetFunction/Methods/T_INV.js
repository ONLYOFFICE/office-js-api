// This example shows how to return the left-tailed inverse of the Student's t-distribution.
// How to calculate the left-tailed inverse of Student's t-distribution.
// Use a function to estimate the Student's t-distribution left-tailed inverse.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.T_INV(0.75, 2);
oWorksheet.GetRange("B2").SetValue(result);

