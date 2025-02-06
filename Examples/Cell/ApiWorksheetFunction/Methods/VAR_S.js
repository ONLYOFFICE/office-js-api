// This example shows how to estimate variance based on a sample (ignores logical values and text in the sample).
// How to estimate variance based on a sample.
// Use a function to estimate variance ignoring logical and text values.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.VAR_S(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
oWorksheet.GetRange("B2").SetValue(result);

