// This example shows how to calculate the geometric mean of positive numeric data.
// How to find the geometric mean.
// Use a function to calculate the geometric mean of positive numeric data.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.GEOMEAN(28, 16, 878, 800, 1650, 2000);
oWorksheet.GetRange("B2").SetValue(ans);

