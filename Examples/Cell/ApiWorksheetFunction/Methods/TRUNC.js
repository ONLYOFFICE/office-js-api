// This example shows how to truncate a number to an integer by removing the decimal, or fractional, part of the number.
// How to truncate a number to an integer.
// Use a function to truncate a number.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TRUNC(3.14159265, 5));