// This example shows how to return the price per $100 face value of a security with an odd first period.

// How to get the price per $100 face value of a security with an odd first period.

// Use a function to return the price per $100 face value of a security.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ODDFPRICE("1/1/2017", "6/1/2019", "12/1/2016", "3/15/2017", 0.05, 0.09, 100, 2));