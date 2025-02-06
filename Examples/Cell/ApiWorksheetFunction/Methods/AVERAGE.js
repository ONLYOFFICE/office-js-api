// This example shows how to return the average of the absolute deviations of data points from their mean.
// How to get an average of the absolute deviations.
// Use function to get the average of the absolute deviations of data points from their mean.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.AVERAGE(123, 197, 46, 345, 67, 456);
oWorksheet.GetRange("B2").SetValue(ans);