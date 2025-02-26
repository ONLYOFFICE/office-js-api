// This example shows how to return the cotangent of a complex number.

// How to get the cotangent.

// Use a function to get the cotangent of a complex number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMCOT("-2+2.5i"));