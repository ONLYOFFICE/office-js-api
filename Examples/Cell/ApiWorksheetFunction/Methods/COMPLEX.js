// This example shows how to convert real and imaginary coefficients into a complex number.

// How to create a complex number using coefficients.

// Use function to convert real and imaginary coefficients into a complex number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COMPLEX(-2, 2.5, "i"));