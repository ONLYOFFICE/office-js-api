// This example shows how to check whether a value is a reference, and returns true or false.
// How to know whether a value is a reference.
// Use a function to find out whether a value is a reference.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISREF("A3"));
oWorksheet.GetRange("A2").SetValue(oFunction.ISREF(oWorksheet.GetRange("A3")));