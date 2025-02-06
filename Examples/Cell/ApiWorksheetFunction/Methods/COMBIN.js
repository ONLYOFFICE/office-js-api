// This example shows how to return the number of combinations for a given number of items.
// How to find a number of combinations.
// Use function to count possible combinations for a given number of items.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COMBIN(67, 7));