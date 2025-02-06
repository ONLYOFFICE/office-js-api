// This example shows how to return the inverse hyperbolic cosine of a number.
// How to get an inverse hyperbolic cosine of a number and display it in the worksheet.
// Get a function that gets inverse hyperbolic cosine of a number.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ACOSH(3.25));