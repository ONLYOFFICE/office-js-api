// This example shows how to calculate the probability that a member of a standard normal population will fall between the mean and arg1 standard deviations from the mean.

// How to calculate the probability that a member of a standard normal population will fall between two values.

// Use a function to calculate the probability.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.GAUSS(2);
oWorksheet.GetRange("B2").SetValue(ans);

