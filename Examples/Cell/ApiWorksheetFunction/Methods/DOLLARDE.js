// This example shows how to convert a dollar price, expressed as a fraction, into a dollar price, expressed as a decimal number.
// How to convert a dollar price from farction to decimal.
// Use function to get decimal from fraction price.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DOLLARDE(1.03, 16));