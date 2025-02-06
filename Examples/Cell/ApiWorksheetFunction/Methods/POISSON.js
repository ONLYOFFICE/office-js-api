// This example shows how to calculate the Poisson distribution.
// How to return the Poisson distribution.
// Use a function to calculate the Poisson distribution.
const oWorksheet = Api.GetActiveSheet();

//method params
var x = 9;
var mean = 12;
var cumulative = false;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.POISSON(x, mean, cumulative);

oWorksheet.GetRange("C1").SetValue(ans);
