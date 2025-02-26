// This example shows how to return the yield for a Treasury bill.

// How to return the yield for a Treasury bill.

// Use a function to calculate a Treasury bill yield.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TBILLYIELD("2/15/2018", "6/1/2018", 99.5));