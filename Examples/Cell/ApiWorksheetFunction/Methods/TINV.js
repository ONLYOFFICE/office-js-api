// This example shows how to return the two-tailed inverse of the Student's t-distribution.
// How to create a serial number from the two-tailed inverse.
// Use a function to get two-tailed inverse of the Student's t-distribution.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.TINV(0.5, 10);
oWorksheet.GetRange("B2").SetValue(result);

