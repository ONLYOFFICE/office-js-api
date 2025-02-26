// This example shows how to return the number of coupons payable between the settlement date and maturity date.

// How to find the number of coupons payable between the settlement date and maturity date.

// Use function to get the number of coupons payable between the settlement date and maturity date.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COUPNUM("1/10/2018", "6/15/2019", 4, 1));