// This example shows how to return the (right-tailed) F probability distribution (degree of diversity) for two data sets.

// How to get an F probability distribution of two datasets.

// Use function to get F probability distribution (degree of diversity).

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.FDIST(10, 6, 4);
oWorksheet.GetRange("B2").SetValue(ans);