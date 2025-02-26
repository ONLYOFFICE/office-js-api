// This example shows how to return the arccotangent of a number, in radians in the range from 0 to Pi.

// How to get an arccotangent of a number and display it in the worksheet.

// Get a function that gets arccotangent of a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ACOT(0));