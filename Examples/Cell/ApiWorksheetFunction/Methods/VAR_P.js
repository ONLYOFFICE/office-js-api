// This example shows how to calculate variance based on the entire population (ignores logical values and text in the population).
// How to get variance based on the population.
// Use a function to calculate variance based on the entire population.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.VAR_P(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
oWorksheet.GetRange("B2").SetValue(result);

