// This example shows how to return the square root of a complex number.

// How to get the square root.

// Use a function to get the square root of a complex number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMSQRT("-2+2.5i"));