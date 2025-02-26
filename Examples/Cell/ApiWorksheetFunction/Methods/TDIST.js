// This example shows how to return the Student's t-distribution.

// How to calculate a Student's t-distribution.

// Use a function to estimate a Student's t-distribution.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.TDIST(1.5, 10, 1);
oWorksheet.GetRange("B2").SetValue(ans);

