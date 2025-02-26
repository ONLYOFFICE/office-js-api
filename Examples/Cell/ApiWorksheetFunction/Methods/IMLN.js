// This example shows how to return the natural logarithm of a complex number.

// How to get the natural logarithm of a comlex numbers.

// Use a function to get the natural logarithm.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMLN("-2+2.5i"));