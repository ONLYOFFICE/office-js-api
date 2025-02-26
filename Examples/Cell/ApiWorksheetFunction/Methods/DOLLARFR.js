// This example shows how to convert a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction.

// How to convert a dollar price from decimal to fraction.

// Use function to get fraction from decimal price.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DOLLARFR(1.1875, 16));