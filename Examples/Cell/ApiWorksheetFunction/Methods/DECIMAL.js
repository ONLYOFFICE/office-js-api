// This example shows how to convert a text representation of a number in a given base into a decimal number. 
// How to get a decimal value from a text.
// Use function to convert a text value to decimal using base.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DECIMAL(101, 2));