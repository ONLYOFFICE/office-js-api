// This example shows how to return the negative binomial distribution, the probability that there will be the specified number of failures before the last success, with the specified probability of a success.
// How to return the negative binomial distribution.
// Use a function to get the probability of the specified number of failures before the last success (negative binomial distribution).
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.NEGBINOM_DIST(6, 32, 0.7, true));