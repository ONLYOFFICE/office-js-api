// This example shows how to return the arctangent of a number.
// How to get an arctangent of a number.
// Use function to get an arctangent of a number.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ATAN(0.25));