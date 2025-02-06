// This example shows how to round a positive number up and negative number down to the nearest even integer.
// How to round up a number.
// Use function to round up positive/negative numbers.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.EVEN(15.67));