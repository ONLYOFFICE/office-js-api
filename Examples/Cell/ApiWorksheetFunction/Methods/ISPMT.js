// This example shows how to return the interest paid during a specific period of an investment.

// How to get the investment interest paid during a specific period.

// Use a function to get an interest paid during a specific period.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISPMT(0.1/12, 1, 2*12, 2000));