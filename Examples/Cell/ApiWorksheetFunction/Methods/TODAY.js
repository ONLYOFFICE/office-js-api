// This example shows how to return the current date in the MM/dd/yy format.
// How to get a current date.
// Use a function to get current date in MM/dd/yy format.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TODAY());