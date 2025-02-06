// This example shows how to return the base-10 logarithm of a complex number.
// How to get the logarithm of base 10 of a comlex numbers.
// Use a function to get the base 10 logarithm.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMLOG10("-2+2.5i"));