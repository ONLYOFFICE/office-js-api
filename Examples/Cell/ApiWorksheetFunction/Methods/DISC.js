// This example shows how to get the discount rate for a security.

// How to get a security discount rate.

// Use function to find security discount rate.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DISC("10/15/2018", "1/1/2020", 98, 100, 1));