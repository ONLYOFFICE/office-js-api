// This example shows how to return the logarithm of a number to the specified base.

// How to get the logarithm to the specified base.

// Use a function to return the logarithm.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.LOG(56, 5));