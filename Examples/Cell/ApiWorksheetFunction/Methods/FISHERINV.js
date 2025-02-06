// This example shows how to get an inverse of the Fisher transformation: if y = FISHER(x), then FISHERINV(y) = x.
// How to get an inverse of the Fisher transformation.
// Use function to find out an inverse of Fisher transformation.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.FISHERINV(0.56);
oWorksheet.GetRange("B2").SetValue(ans);


