// This example shows how to return the annual yield of a security that pays interest at maturity.
// How to return annual yield of a security.
// Use a function to get a security annual yield.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.YIELDMAT("1/10/2018", "11/20/2019", "1/1/2017", "6.00%", 90));