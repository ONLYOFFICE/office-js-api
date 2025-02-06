// This example shows how to return the number of periods required by an investment to reach a specified value.
// How to get periods required to get a value of an investment.
// Use a function to get the number of periods required by an investment to reach a specified value.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PDURATION("2.50%", 2000, 2200));