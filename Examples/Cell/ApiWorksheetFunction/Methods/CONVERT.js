// This example shows how to convert a number from one measurement system to another.
// How to convert a number from one measurement system to another.
// Use function to convert a number from one measurement system to another.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CONVERT(2, "Ibm", "kg"));