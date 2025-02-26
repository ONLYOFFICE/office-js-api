// This example shows how to return a number that represents the date in the date-time code.

// How to get a date.

// Use function to get the date from a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DATE(2018, 3, 16));