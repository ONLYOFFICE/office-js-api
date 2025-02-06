// This example shows how to return the inverse of the cumulative beta probability density function (BETA_DIST).
// How to get a result from the inverse of the cumulative beta probability density function.
// Use function to get the inverse of the cumulative beta probability distribution function.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BETAINV(0.2, 4, 5));