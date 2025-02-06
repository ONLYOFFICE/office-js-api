// This example shows how to get a Fisher transformation.
// How to get a Fisher transformation.
// Use function to find out a Fisher transformation.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.FISHER(0.56);
oWorksheet.GetRange("B2").SetValue(ans);


