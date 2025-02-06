// This example shows how to return the probability of a trial result using a binomial distribution.
// How to get a probability of a trial result.
// Use function to get a probability of a trial result using binomial distribution.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BINOM_DIST_RANGE(60, 0.75, 45, 50));