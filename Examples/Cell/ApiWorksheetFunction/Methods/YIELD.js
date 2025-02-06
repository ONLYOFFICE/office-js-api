// This example shows how to return the yield on a security that pays periodic interest.
// How to return the yield on a security.
// Use a function to calculate the yield on a security that pays periodic interest.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.YIELD("1/10/2018", "11/20/2019", "3.75%", 90, 100, 4));