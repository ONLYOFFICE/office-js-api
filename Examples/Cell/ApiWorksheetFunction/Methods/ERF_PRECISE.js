// This example shows how to return the error function integrated between 0 and the specified lower limit.
// How to get an error function (from 0 to lower).
// Use function to get an error function set between 0 and lower limits.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ERF_PRECISE(0.745));