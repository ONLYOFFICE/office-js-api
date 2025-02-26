// This example shows how to return the mathematical constant pi, equal to 3.14159265358979, accurate to 15 digits.

// How to return the mathematical constant pi.

// Use a function to return a constant pi.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PI());