// This example shows how to return the number of days in the coupon period that contains the settlement date.
// How to find the the number of days in the coupon period that contains the settlement date.
// Use function to get the number of days in the coupon period that contains the settlement date.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COUPDAYS("1/10/2018", "6/15/2019", 4, 1));