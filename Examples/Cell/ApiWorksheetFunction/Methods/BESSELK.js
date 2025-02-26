// This example shows how to return the modified Bessel function Kn(x).

// How to get a result from Bessel function Kn(x).

// Use function to get the Bessel function Kn(x).

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BESSELK(1.5, 1));