// This example shows how to convert a number into a text representation with the given radix (base).

// How to convert a number into text.

// Use function to get a text from a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BASE(5, 2, 5));