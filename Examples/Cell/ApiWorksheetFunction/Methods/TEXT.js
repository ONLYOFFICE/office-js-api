// This example shows how to convert a value to text in a specific number format.

// How to convert a value to text.

// Use a function to convert a value to text.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TEXT(45.5, "$0.00"));