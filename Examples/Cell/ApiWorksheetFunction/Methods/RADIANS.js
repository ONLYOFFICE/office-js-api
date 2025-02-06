// This example shows how to convert degrees to radians.
// How to get radians from degree.
// Use a function to convert degrees to radians.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.RADIANS(90));