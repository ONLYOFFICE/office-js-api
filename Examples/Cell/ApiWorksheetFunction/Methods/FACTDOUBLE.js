// This example shows how to return the double factorial of a number.

// How to calculate a double factorial.

// Use function to calculate the double factorial of a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.FACTDOUBLE(123));