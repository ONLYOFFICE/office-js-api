// This example shows how to return the cosecant of a complex number.

// How to get the cosecant.

// Use a function to get the cosecant of a complex number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMCSC("-2+2.5i"));