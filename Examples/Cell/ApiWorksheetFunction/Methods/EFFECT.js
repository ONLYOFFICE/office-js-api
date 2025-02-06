// This example shows how to return the effective annual interest rate.
// How to get an effective annual interest rate.
// Use function to get effective annual interest rate.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.EFFECT(0.57, 4));