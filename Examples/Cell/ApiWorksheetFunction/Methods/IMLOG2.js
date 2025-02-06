// This example shows how to return the base-2 logarithm of a complex number.
// How to get the logarithm of base 2 of a comlex numbers.
// Use a function to get the base 2 logarithm.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMLOG2("-2+2.5i"));