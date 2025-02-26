// This example shows how to return the yield of a security with an odd first period.

// How to get the yield of a security.

// Use a function to return a security yield.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ODDFYIELD("1/1/2017", "6/1/2019", "12/1/2016", "3/15/2017", 0.06, 90, 100, 2));