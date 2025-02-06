// This example shows how to return the modified Bessel function In(x).
// How to get a resutl from Bessel function In(x).
// Use function to get the modified Bessel function In(x).
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BESSELI(3.5, 1));