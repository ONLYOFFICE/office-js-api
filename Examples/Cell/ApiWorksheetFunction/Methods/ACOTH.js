// This example shows how to return the inverse hyperbolic cotangent of a number.
// How to get an inverse hyperbolic cotangent of a number and display it in the worksheet.
// Get a function that gets inverse hyperbolic cotangent of a number.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ACOTH(3));