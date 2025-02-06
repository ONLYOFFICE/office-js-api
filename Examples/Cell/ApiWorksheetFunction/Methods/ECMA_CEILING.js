// This example shows how to round the number up to the nearest multiple of significance. Negative numbers are rounded towards zero.
// How to round up the number.
// Use function to round up a number to the nearest multiple of significance.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ECMA_CEILING(1.567, 0.1));