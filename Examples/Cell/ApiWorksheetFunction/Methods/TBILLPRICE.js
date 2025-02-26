// This example shows how to return the price per $100 face value for a Treasury bill.

// How to return the price per $100 face value for a Treasury bill.

// Use a function to calculate the price per $100 face value.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TBILLPRICE("1/1/2018", "1/1/2019", "3.00%"));