// This example shows how to return the arccosine of a number, in radians in the range from 0 to Pi. The arccosine is the angle whose cosine is a number specified in the parameters.

// How to get an arccosine of a number and display it in the worksheet.

// Get a function that gets arccosine of a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ACOS(0));