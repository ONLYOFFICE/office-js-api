// This example shows how to return a complex number raised to an integer power.
// How to get the result from raising into power of a complex number.
// Use a function to get the result from the power.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMPOWER("-2+2.5i", -3));