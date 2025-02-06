// This example shows how to return the secant of a complex number.
// How to get the secant.
// Use a function to get the secant of a complex number.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMSEC("-2+2.5i"));