// This example shows how to calculate the payment for a loan based on constant payments and a constant interest rate.
// How to return the payment for a loan based on different parameters.
// Use a function to return the payment for a loan.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PMT(0.08/12, 2*12, 10000, 0));