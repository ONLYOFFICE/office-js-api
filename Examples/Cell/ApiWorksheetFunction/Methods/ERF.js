// This example shows how to return the error function integrated between the specified lower and upper limits.

// How to get an error function.

// Use function to get an error function set between upper and lower limits.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ERF(-2));