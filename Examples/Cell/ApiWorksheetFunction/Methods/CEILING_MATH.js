// This example shows how to round a number up, to the nearest integer or to the nearest multiple of significance.

// How to round a number up.

// Use function to round a number up the nearest integer or to the nearest multiple of significance.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CEILING_MATH(-5.5, 2, 1));