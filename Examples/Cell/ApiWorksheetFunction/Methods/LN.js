// This example shows how to return the natural logarithm of a number.

// How to get the natural logarithm.

// Use a function to return a natural logarithm.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.LN(23));