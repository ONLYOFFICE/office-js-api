// This example shows how to return the real coefficient of a complex number.
// How to get the real coefficient.
// Use a function to get the real coefficient of a complex number.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMREAL("-2+2.5i"));