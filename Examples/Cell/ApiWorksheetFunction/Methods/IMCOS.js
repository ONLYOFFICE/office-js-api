// This example shows how to return the cosine of a complex number.
// How to get the cosine.
// Use a function to get the cosine of a complex number.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMCOS("-2+2.5i"));