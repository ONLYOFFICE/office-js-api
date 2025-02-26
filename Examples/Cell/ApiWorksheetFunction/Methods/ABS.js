// This example shows how to get absolute value of a number.

// How to add absolute value to the worksheet.

// Get a function that gets absolute value.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ABS(-123.14));