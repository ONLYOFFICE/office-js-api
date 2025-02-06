// This example shows how to return the absolute value (modulus) of a complex number.
// How to get the absolute value of the complex number.
// Use a function to get a modulus of the complex number. 
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMABS("-2+2.5i"));