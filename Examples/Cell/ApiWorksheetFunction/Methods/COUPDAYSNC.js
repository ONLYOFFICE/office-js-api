// This example shows how to return the number of days from the settlement date to the next coupon date.
// How to find the number of days from the settlement date to the next coupon date.
// Use function to get the number of days from the settlement date to the next coupon date.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COUPDAYSNC("1/10/2018", "6/15/2019", 4, 1));