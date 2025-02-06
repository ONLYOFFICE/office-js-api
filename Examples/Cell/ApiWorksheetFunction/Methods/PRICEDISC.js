// This example shows how to return the price per $100 face value for a discounted security.
// How to return the price per $100 face value for a discounted security.
// Use a function to return the price per $100 face value for a discounted security.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PRICEDISC("1/1/2017", "6/1/2019", 0.05, 105, 1));