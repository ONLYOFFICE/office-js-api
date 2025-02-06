// This example shows how to return the kurtosis of a data set.
// How to know a data set kurtosis.
// Use a function to find out kurtosis of a data set.
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var kurtosis = oFunction.KURT(3, 89, 34, 2, 45, 4, 45, 13);
oWorksheet.GetRange("C1").SetValue(kurtosis);