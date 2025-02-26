// This example shows how to return the number of days from the beginning of the coupon period to the settlement date.

// How to find the number of days from the beginning of the coupon period to the settlement date.

// Use function to get days count from the beginning of the coupon period to the settlement date.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COUPDAYBS("1/10/2018", "6/15/2019", 4, 1));