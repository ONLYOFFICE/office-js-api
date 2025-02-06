// This example shows how to return the exponential of a complex number.
// How to get the exponential of a comlex numbers.
// Use a function to get the exponential.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMEXP("-2+2.5i"));