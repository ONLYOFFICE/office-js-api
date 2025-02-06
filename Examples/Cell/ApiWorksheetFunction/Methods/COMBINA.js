// This example shows how to return the number of combinations with repetitions for a given number of items.
// How to find a number of combinations with repetitions.
// Use function to count possible combinations with duplicates for a given number of items.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COMBINA(7, 2));