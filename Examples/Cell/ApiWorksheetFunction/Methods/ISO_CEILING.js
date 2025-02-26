// This example shows how to return a number that is rounded up to the nearest integer or to the nearest multiple of significance regardless of the sign of the number. The number is always rounded up regardless of its sing. 

// How to round up a number to the nearest integer.

// Use a function to round up a number to the nearest integer.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISO_CEILING(-6.7, 2));