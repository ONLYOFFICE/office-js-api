// This example shows how to return the gamma distribution.
// How to calculate the gamma distribution.
// Use a function to get the result from a gamma distribution.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.GAMMADIST(10, 9, 2, false);
oWorksheet.GetRange("B2").SetValue(ans);

