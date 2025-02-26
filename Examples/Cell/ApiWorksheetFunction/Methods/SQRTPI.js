// This example shows how to return the square root of (number * pi).

// How to calculate the square root of a number multiplied by aa constant Pi.

// Use a function to get the square root of (number * pi).

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SQRTPI(5));