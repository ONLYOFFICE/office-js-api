// This example shows how to round a number up, away from zero.

// How to round a number up.

// Use a function to round a number away from zero.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ROUNDUP(3.456, 0));