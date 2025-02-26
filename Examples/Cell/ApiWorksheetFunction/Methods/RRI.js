// This example shows how to return an equivalent interest rate for the growth of an investment.

// How to get an investment growth interest rate.

// Use a function to an equivalent interest rate for the increase of an investment.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.RRI(12, 10000, 20000));