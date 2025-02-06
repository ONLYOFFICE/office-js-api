// This example shows how to return the modified Bessel function Yn(x).
// How to get a result from Bessel function Yn(x).
// Use function to get the Bessel function Yn(x).
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BESSELY(2.5, 1));