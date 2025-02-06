// This example shows how to return the imaginary coefficient of a complex number.
// How to get the imaginary part of the complex number.
// Use a function to get an imaginary coefficient of the complex number. 
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMAGINARY("-2+2.5i"));