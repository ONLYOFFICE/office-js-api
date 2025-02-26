// This example shows how to return the inverse of the standard normal cumulative distribution (has a mean of zero and a standard deviation of one).

// How to calculate the inverse of the standard normal cumulative distribution.

// Use a function to get the inverse of the standard normal cumulative distribution.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.NORM_S_INV(0.908));