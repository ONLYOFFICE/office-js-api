// This example shows how to return the beta probability distribution function.
// How to get a result from beta probability distribution function.
// Use function to get the beta probability distribution function.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.BETADIST(0.4, 4, 5);
oWorksheet.GetRange("B2").SetValue(ans);