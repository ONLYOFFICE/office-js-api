// This example shows how to return the inverse of the lognormal cumulative distribution function of x, where ln(x) is normally distributed with the specified parameters.

// How to get the inverse of the lognormal cumulative distribution function of x.

// Use a function to return the inverse of the lognormal cumulative distribution function.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.LOGNORM_INV(0.3, 2, 0.2));