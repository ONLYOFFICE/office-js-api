// This example shows how to return the average of the absolute deviations of data points from their mean.
// How to get an average of the absolute deviations.
// Use function to get the average of the absolute deviations of data points from their mean.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.AVEDEV(78, 98, 123, 45, 70, 67, 3, 9, 289));