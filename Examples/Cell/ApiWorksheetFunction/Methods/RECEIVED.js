// This example shows how to return the amount received at maturity for a fully invested security.
// How to estimate the amount received at maturity.
// Use a function to calculate the funds got at maturity for a fully invested security.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.RECEIVED("1/1/2017", "6/1/2019", "$10,000.00", "3.75%", 2));