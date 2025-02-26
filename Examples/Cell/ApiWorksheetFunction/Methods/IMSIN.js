// This example shows how to return the sine of a complex number.

// How to get the sine.

// Use a function to get the sine of a complex number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMSIN("-2+2.5i"));