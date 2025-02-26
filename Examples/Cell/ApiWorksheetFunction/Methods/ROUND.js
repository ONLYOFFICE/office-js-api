// This example shows how to round a number to a specified number of digits.

// How to round a number.

// Use a function to round a number to indicated number of digits.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ROUND(3.456, 2));