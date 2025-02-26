// This example shows how to return the harmonic mean of a data set of positive numbers: the reciprocal of the arithmetic mean of reciprocals.

// How to calculate the harmonic mean of a data set of positive numbers.

// Use a function to calculate harmonic mean.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.HARMEAN(28, 16, 878, 800, 1650, 2000);
oWorksheet.GetRange("B2").SetValue(ans);

