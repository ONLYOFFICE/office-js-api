// This example shows how to return the payment on the principal for a given investment based on periodic, constant payments and a constant interest rate.
// How to return the payment on the principal for a given investment.
// Use a function to calculate the payment on the principal for a given investment based on parameters.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PPMT(0.1/12, 1, 2*12, 2000, 0));