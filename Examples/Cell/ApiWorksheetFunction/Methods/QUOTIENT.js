// This example shows how to return the integer portion of a division.

// How to get the integer part from the result of division.

// Use a function to integer part from division.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.QUOTIENT(1698, 30));