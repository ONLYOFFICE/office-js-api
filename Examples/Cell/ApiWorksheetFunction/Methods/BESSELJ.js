// This example shows how to return the Bessel function Jn(x).

// How to get a result from Bessel function Jn(x).

// Use function to get the Bessel function Jn(x).

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BESSELJ(1.9, 2));