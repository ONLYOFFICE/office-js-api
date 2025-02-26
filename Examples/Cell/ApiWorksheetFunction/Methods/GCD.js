// This example shows how to calculate the greatest common divisor.

// How to find the greatest common divisor.

// Use a function to calculate the greatest common divisor.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.GCD(28, 16, 878, 800, 1650, 2000));