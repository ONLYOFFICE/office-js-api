// This example shows how to return the annual nominal interest rate.

// How to calculate the annual nominal interest rate.

// Use a function to get the annual nominal interest rate.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.NOMINAL(0.7, 4));