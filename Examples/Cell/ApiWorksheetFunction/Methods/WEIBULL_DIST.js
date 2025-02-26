// This example shows how to return the Weibull distribution.

// How to return the Weibull distribution.

// Use a function to calculate the Weibull distribution.


var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.WEIBULL_DIST(12, 2, 5, true);
oWorksheet.GetRange("B2").SetValue(result);

