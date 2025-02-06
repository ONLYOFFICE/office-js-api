// This example shows how to check whether a value is text, and returns true or false.
// How to know whether a value is a text.
// Use a function to find out whether a value is a text.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISTEXT(255));
oWorksheet.GetRange("A2").SetValue(oFunction.ISTEXT("#N/A"));
oWorksheet.GetRange("A3").SetValue(oFunction.ISTEXT("Online Office"));