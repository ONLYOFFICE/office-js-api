// This example shows how to return the interest payment for a given period for an investment, based on periodic, constant payments and a constant interest rate.

// How to calculate the interest payment for a given period for an investment.

// Use a function to get the interest payment.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IPMT(0.1/12, 1, 2*12, 2000, 0));