// This example shows how to get the cumulative principal paid on a loan between two periods.

// How to return the cumulative principal paid on a loan between two periods.

// Use function to get the cumulative principal paid on a loan between two periods.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CUMPRINC(0.1/12, 2*12, 2000, 1, 24, 0));