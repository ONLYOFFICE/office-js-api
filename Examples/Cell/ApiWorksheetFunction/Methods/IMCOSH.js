// This example shows how to return the hyperbolic cosine of a complex number.
// How to get the hyperbolic cosine.
// Use a function to get the hyperbolic cosine of a complex number.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMCOSH("-2+2.5i"));