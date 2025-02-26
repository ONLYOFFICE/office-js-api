// This example shows how to return the hyperbolic cosecant of a complex number.

// How to get the hyperbolic cosecant.

// Use a function to get the hyperbolic cosecant of a complex number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMCSCH("-2+2.5i"));