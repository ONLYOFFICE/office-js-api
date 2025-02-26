// This example shows how to return the price per $100 face value for a security that pays interest at maturity.

// How to return the price per $100 face value by interest at maturity.

// Use a function to return the price per $100 face value for a security that pays maturity interest.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PRICEMAT("1/1/2017", "6/1/2019", "12/1/2016", 0.05, 0.09, 1));