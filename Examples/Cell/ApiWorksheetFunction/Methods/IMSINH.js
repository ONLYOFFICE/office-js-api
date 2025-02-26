// This example shows how to return the hyperbolic sine of a complex number.

// How to get the hyperbolic sine.

// Use a function to get the hyperbolic sine of a complex number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMSINH("-2+2.5i"));