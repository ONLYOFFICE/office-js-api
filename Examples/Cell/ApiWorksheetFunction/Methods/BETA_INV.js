// This example shows how to return the inverse of the cumulative beta probability density function for a specified beta distribution (BETADIST).

// How to get a result from inverse of the cumulative beta probability density function.

// Use function to get the cumulative beta probability density function.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.BETA_INV(0.2, 4, 5);
oWorksheet.GetRange("B2").SetValue(ans);