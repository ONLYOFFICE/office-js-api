// This example shows how to return the hyperbolic secant of a complex number.
// How to get the hyperbolic secant.
// Use a function to get the hyperbolic secant of a complex number.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMSECH("-2+2.5i"));