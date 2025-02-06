// This example shows how to return the individual term binomial distribution probability.
// How to get an individual term binomial distribution probability.
// Use function to get an individual term binomial distribution probability.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BINOM_DIST(50, 67, 0.45, false));