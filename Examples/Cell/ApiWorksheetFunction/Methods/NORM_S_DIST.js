// This example shows how to return the standard normal distribution (has a mean of zero and a standard deviation of one).
// How to calculate the standard normal distribution.
// Use a function to get the standard normal distribution with a mean = 0 and standard deviation = 1.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.NORM_S_DIST(1.33, true));