// This example shows how to return the quotient of two complex numbers.
// How to get the quotient of two comlex numbers.
// Use a function to get the quotient.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMDIV("-2+2.5i", "0.1+1.5j"));