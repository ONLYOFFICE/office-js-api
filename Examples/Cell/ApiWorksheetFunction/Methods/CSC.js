// This example shows how to get the cosecant of an angle.

// How to return cosecant.

// Use function to get the cosecant of an angle.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CSC(0.785398));