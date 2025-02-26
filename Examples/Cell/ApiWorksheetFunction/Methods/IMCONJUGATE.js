// This example shows how to return the complex conjugate of a complex number.

// How to get the complex conjugate.

// Use a function to get the complex conjugate of a complex number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMCONJUGATE("-2+2.5i"));