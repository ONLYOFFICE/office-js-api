// This example shows how to return the remainder after a number is divided by a divisor.
// How to get the modulo from the division.
// Use a function to calculate the remainder from the division operation.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.MOD(65, 7));